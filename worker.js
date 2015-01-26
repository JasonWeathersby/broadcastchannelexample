onmessage = function(e) {
    console.log('Message received from main script');
    console.log('Posting message back to main script');
    //worker standard message
    postMessage("Message from Worker");
    //Broadcast Channel Message with Worker
    var workerChannel = new BroadcastChannel('foo');
    workerChannel.postMessage("BroadcastChannel Message Sent from Worker");
    workerChannel.close();
}