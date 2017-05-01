/*
* Using the tutorial at https://medium.com/@ryanchenkie_40935/angular-cli-deployment-host-your-angular-2-app-on-heroku-3f266f13f352
* quick server code used to put angular-cli on hiroku
* a full node server with user authentification and mongoDB data storing should be done later
 */
const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory (should contain angular app after ng-build is ran from angular-cli)
app.use(express.static(__dirname + '/dist'));
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Start the app by listening on the default
// Heroku port

app.listen(process.env.PORT || 8080);
