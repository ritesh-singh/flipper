/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.flipper.sample.tutorial

import android.app.Application
import android.content.Context
import androidx.datastore.core.DataStore
import androidx.datastore.dataStore
import com.facebook.drawee.backends.pipeline.Fresco
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.plugins.datastore.DataStoreProtoPlugin
import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin
import com.facebook.flipper.plugins.inspector.DescriptorMapping
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
import com.facebook.flipper.sample.tutorial.plugin.SeaMammalFlipperPlugin
import com.facebook.litho.config.ComponentsConfiguration
import com.facebook.litho.editor.flipper.LithoFlipperDescriptors
import com.facebook.soloader.SoLoader
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

private val Context.userPreferencesStore: DataStore<UserPreferences> by dataStore(
  fileName = "user_prefs.pb",
  serializer = UserPrefSerializer
)

class TutorialApplication : Application() {

  private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)

  override fun onCreate() {
    super.onCreate()

    scope.launch {
      userPreferencesStore.updateData {
        it.toBuilder()
          .setShowCompleted(true)
          .setQuery("query")
          .setPageNumber(2)
          .setResultPerPage(20)
          .setLicense(
            License.newBuilder()
              .setKey("key")
              .setName("LicenseName")
              .setSpdxId("spdxId")
              .setNodeId("nodeId")
              .build()
          )
          .build()
      }
    }

    SoLoader.init(this, false)
    Fresco.initialize(this)

    // Normally, you would want to make these dependent on BuildConfig.DEBUG.
    ComponentsConfiguration.isDebugModeEnabled = true
    ComponentsConfiguration.enableRenderInfoDebugging = true

    val flipperClient = AndroidFlipperClient.getInstance(this)
    val descriptorMapping = DescriptorMapping.withDefaults()
    LithoFlipperDescriptors.addWithSections(descriptorMapping)

    flipperClient.addPlugin(InspectorFlipperPlugin(this, descriptorMapping))
    flipperClient.addPlugin(FrescoFlipperPlugin())
    flipperClient.addPlugin(SeaMammalFlipperPlugin())

    flipperClient.addPlugin(
      DataStoreProtoPlugin(
        userPreferencesStore.data.map {
          // https://github.com/protocolbuffers/protobuf/issues/5052 - no support for protobuff to json coversion
          it.toString()
        }
      )
    )

    flipperClient.start()
  }
}
