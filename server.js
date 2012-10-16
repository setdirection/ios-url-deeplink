//
// Loading standard modules
//
var express = require('express'),
    argv = require('optimist').argv,
    url = require('url'),
    hbs = require('hbs');

// Loading our code
var app = express(),
    opts = {
      port: process.env.PORT || 8001
    };

//
// Setup
//

app.configure(function() {
  app.use(express.cookieParser('clench it'));
  app.use(express.bodyParser());
  app.use(express.session());
  app.use(app.router);

  app.set('view engine', 'bars');
  app.locals({ settings: { views: "./views/" } });
  app.engine('bars', hbs.__express);

  app.use(express.static(__dirname + '/public'));
});


//
// Routes
//

app.get('/', function(req, res) {
  res.render('index.bars');
});

app.get('/walmartproduct', function(req, res) {
  res.render('walmartproduct.bars');
});

app.get('/walmartproduct2', function(req, res) {
  res.redirect(302, 'walmart://browse/aHR0cDovL3d3dy53YWxtYXJ0LmNvbS9icm93c2UvcGFydHktb2NjYXNpb25zL2hhbGxvd2Vlbi1pbmZsYXRhYmxlcy8yNjM3XzYxNTc2MF8xMDczNjg0XzEwNzMzMjRfNDMwNzI2Lz9fcmVmaW5lcmVzdWx0PXRydWUmY2F0TmF2SWQ9NjE1NzYwJnBvdmlkPWNhdDYxNTc2MC1lbnY5OTk5OTktbW9kdWxlMDgwNzEyLUxITl9JbmZsYXRhYmxlcw');
});

//
// Starting the server is being run from command line (not via tests)
//
if (!module.parent) {
  app.listen(opts.port, function() {
    console.log("\nios-url-deeplink is ready to throw some content at devices.\n  - listening on port: " + opts.port + "\n");
  });
}


//
// Helper Functions
//

