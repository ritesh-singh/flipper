package com.facebook.flipper.plugins.datastore

import com.facebook.flipper.core.FlipperConnection
import com.facebook.flipper.core.FlipperObject
import com.facebook.flipper.core.FlipperPlugin
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.collectLatest

class DataStoreProtoPlugin(private val flow: Flow<String>) : FlipperPlugin {

    private var connection: FlipperConnection? = null

    override fun getId(): String = "data-store-proto"

    private val scope = CoroutineScope(SupervisorJob())

    override fun onConnect(connection: FlipperConnection?) {
        this.connection = connection

        scope.launch {
            flow.collectLatest { jsonString ->
                val flipperObject = FlipperObject.Builder()
                    .put("id", 1)
                    .put("title", "Ritesh")
                    .put("message", jsonString)
                    .build()
                connection?.send(
                    "newRow",
                    flipperObject
                )
            }
        }
    }

    override fun onDisconnect() {
        this.connection = null
        scope.coroutineContext.cancelChildren()
    }

    override fun runInBackground(): Boolean = true
}
