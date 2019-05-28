const app = require('./config/server')
const port = 3005

const server= app.listen(port,function(){
  console.log(`Server is running on port ${port}`)
})

const io = require('socket.io').listen(server)
app.set('io',io)

io.on('connection',function(socket){

  console.log('chegou')

  socket.on('disconnect',function(){
    console.log('Vazou')
  })
  
  socket.on('envioUser',function(data){
    socket.emit('msgClient',
    {apelido : data.apelido, mensagem : data.mensagem})

    socket.broadcast.emit('msgClient',
    {apelido : data.apelido, mensagem : data.mensagem})
    
    socket.emit('partcipantesParaCLiente',
    {apelido : data.apelido})

    socket.broadcast.emit('partcipantesParaCLiente',
    {apelido : data.apelido})
  })
 
  
})