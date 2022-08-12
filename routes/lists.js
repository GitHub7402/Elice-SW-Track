		   
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
/* GET */ router.get("/", function (req, res, next) {
  var id = req.query.id;
  var age = req.query.age;
  console.log("## get request");
  res.render("list.html", {
    write__content: "",
    satisfyfive: like5,
    satisfyfour: like4,
	satisfythree: like3,
	satisfytwo: like2,
	satisfyone: like1,  
    method: "get",
  });
});
/* POST */ router.post("/", function (req, res, next) {
  var content = req.body.write__content;
  var satisfy = req.body.;
  console.log("## post request");
  res.render("list.html", {
    write__content: "",
    satisfyfive: like5,
    satisfyfour: like4,
	satisfythree: like3,
	satisfytwo: like2,
	satisfyone: like1,  
    method: "post",
  });
});
module.exports = router;

           
           
           
           
