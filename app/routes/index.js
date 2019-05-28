module.exports = function(app){
  app.get('/',function(req,res){
    app.app.controllers.index.renderIndex(app,req,res)
  })
}