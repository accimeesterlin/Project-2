class Room{
    //this needs to take in the title of the room, the namespace, and the private boolean only
    constructor(roomId, roomTitle, namespace, privateRoom = false){
        this.roomId = roomId;
        this.roomTitle = roomTitle;
        this.namespace = namespace;
        this.privateRoom = privateRoom;
        this.history = [];
    }
    addMessage(message){
        this.history.push(message);
    }
    clearHistory(){
        this.history = [];
    }
}

module.exports = Room;