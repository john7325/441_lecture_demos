import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.userid) { 
    res.send("Here is the information for you (" + req.session.userid + ")"); 

  } else { 
    res.send('Error: you must be logged in');
  }
});

router.post("/login", function(req, res, next) {
  if (req.session.userid) { 
    res.send("Error: you are already logged in as " + req.session.userid); 
    return; 
  }

  //check username and password
  if(req.body.username == "kylethayer" && req.body.password == "asdasd"){
    //TODO: start a session
    req.session.userid = "kylethayer"; 
    res.send("you logged in")
  } else if (req.body.username == "anotheruser" && req.body.password == "pwd") { 
    req.session.userid = "anotheruser"; 
    req.send("you logged in"); 
  } else{
    //not start session
    res.send("wrong login info")
  }
})

router.post("/logout", function(req, res, next) {
  req.session.destroy(); 
  res.send("You are logged out")
})
  
  

export default router;
