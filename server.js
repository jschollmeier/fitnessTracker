var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3003;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.mongoAtlas || "mongodb://localhost/workouts", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
