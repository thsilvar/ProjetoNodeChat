module.exports = function(app){

    app.post('/chat', function(req, res){
        app.app.controllers.index.chat(app, req, res);
    });

    app.get('/chat', function(req, res){
        res.render("chat");
    });


}