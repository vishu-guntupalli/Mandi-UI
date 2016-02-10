
/**
 * Module dependencies
 */

var express = require('express'),
    routes = require('./routes'),
    api = require('./routes/api'),
    http = require('http'),
    path = require('path'),
    request = require('request');

var app = module.exports = express();


/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use('/swag/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

//Post function
app.post('/mandiService/newUserRegistration', function(req,res){
   console.log(req.body.newUser);
});

app.post('/mandiService/userSignUp', function(req,res){
    var newUser = req.body.newUser;
    var vault =  { userId: newUser.userName,
                   password: newUser.userPassword,
                   emailId: newUser.emailID };

    console.log(JSON.stringify(vault));

    const uri = 'http://localhost:8080/public/saveregistrationinfo';
    request({
              method : 'POST',
              uri : uri,
              json : vault
            },
            function(err, res, body) {
                if(!err){
                   res.json(body);
                }
            });

});

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
