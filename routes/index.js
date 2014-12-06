var express= require('express')
var router = express.Router()

router.get('/',function(req,res){

    res.render('index',{title:'Reserve my place',data:'dude'})

})

router.get('/login',function(req,res){
    res.render('login',{title:'Login'})

})

router.post('/checkuser',function(req,res){
    
    var db = req.db;
    var collection = db.get('userCollection');
    collection.findOne({"email":req.body.email},function(err,doc){
        
           if(doc != null)
            res.send("Welcome, "+doc.name);
        else
            res.redirect('/signup')
            
    
    })
    
   

})

router.get('/signup',function(req,res)
           {
    
        res.render('signup',{title:"signup"})
})

router.post('/adduser',function(req,res){

        var collection = req.db.get("userCollection")
        var data = {
        "name":req.body.name,
            "email":req.body.email,
            "password":req.body.password
        }
        collection.insert(data);
    console.log('Hey inserted!');
        res.redirect('/');

})

module.exports = router;