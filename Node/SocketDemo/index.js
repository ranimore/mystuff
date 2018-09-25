var app=require('express')(),
    http=require('http').Server(app),
    io=require('socket.io')(http);
// var clients=0;
var roomno=0;
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
io.on('connection',function(socket){
    console.log('User Connected.');
    // if(io.nsps['/'].adapter.rooms['room-'+roomno] &&io.nsps['/'].adapter.rooms['room-'+roomno].length>1)roomno++;
   socket.on('room',function(room){
   
    if(io.nsps['/'].adapter.rooms['room-'+room] &&io.nsps['/'].adapter.rooms['room-'+room].length>1){
socket.emit('roomfull',"Room "+ room+ " is full please join to another room!")
    }
  else{ 
    if(socket.room)
    socket.leave(socket.room);
    socket.room = "room-"+room;
       socket.join("room-"+room);
       if(!socket.username)
    socket.username="Anonymous";
    io.sockets.in("room-"+room).emit("connectToRoom",{text:"You are in room ="+room ,roomno:room});
    io.sockets.emit('rooms', io.sockets.adapter.rooms);
}  
})
  
    // clients++;
    // io.emit('broadcast',{description:clients+' client(s)  connected.'})
    // io.sockets.in("room-"+roomno).emit("connectToRoom",{text:"You are in room number ="+roomno ,roomno:roomno});
    socket.on('disconnect',function(){
        console.log('User Disconnected');
        // clients--;
        // io.emit('broadcast',{description:clients+' client(s) connected.'})
    })
    socket.on('setuser',function(name){
        socket.username=name;
    })
    socket.on('message',function(msg){
      console.log('Get message:'+msg.text);
      io.to("room-"+msg.roomno).emit('message',{user:socket.username,text: msg.text})
      io.to("room-"+msg.roomno).emit('endtyping',{username:socket.username})
    });

    socket.on('typing',function(roomno){
               io.to("room-"+roomno).emit('typing',{username:socket.username})
    })

    socket.on('leaveroom',function(){
      socket.leave('room-'+roomno);
    })
    socket.on('getRooms', function() {
        io.sockets.emit('rooms', io.sockets.adapter.rooms);
    });
})



http.listen(3000,function(){
    console.log('Listening on :http://localhost:3000/')
})