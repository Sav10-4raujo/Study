module.exports.renderChat = function(app,req,res){
  let formData = req.body

  req.assert('apelido','Campo obrigatório').notEmpty()
  req.assert('apelido','Entre 3 e 15').len(3,15)
  
  let error = req.validationErrors()

  if(error){
    res.render('index',{validacao : error})
    return
  }

  app.get('io').emit('msgClient',{apelido:formData.apelido, mensagem:"Entrou no chat"})
  res.render('chat',{formData : formData})
} 