export default class ScoreboardEvent {
  constructor(server) {
    this.chatSocket = server.of('/chat');
    this.initEvents();
  }

  initEvents() {
    this.chatSocket.on('connection', client => {
      client.on('chatMessage', data => {
        client.broadcast.emit('receivedMessage', data);
      });
    });
  }
}
