# Shared Workers

What happens when a user updates some data on one tab and moves to another tab with a different view of the same data? Does the new tab grab the latest update from the server? That seems a bit wasteful, the change was made on the users computer and now it has to ask the server for what changes happened? 

#### 

Shared workers to the rescue! With a bit of work, any change on one tab will be replicated to every other tab, as the shared worker can act as a browser-local network to pass messages in between tabs. See my example [here](./sites/shared-worker)
<!-- Creating a websocket connections for every new tab a user opens can be expensive (and often wasteful) especially if you are a tab horder like me. The solution is to only create a single websocket connection per -->
