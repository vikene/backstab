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
           {res.send("Welcome, "+doc.name);
            
            
           }
        else
        {res.redirect('/signup')}
            
    
    })
    
   

})

router.get('/user',function(req,res){

   

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

router.get('/logout',function(req,res){

        session = null;
    console.log("session destroyed");
})

router.get('/blog',function(req,res){
    
    var db = req.db;
    var collection = db.get('blog');
    console.log('i have a connection!');
    collection.find({},function(errr,doc)
                    {
        
           
                
                var buffer = new Array(doc.length);
        var j=0;
                for(var i=doc.length-1;i>=0;i--)
                {
                    buffer[j] = doc[i];
                    j++;
                }
        res.render('blog',{"bloglist":buffer});
    })

    

})

router.get('/post_blog',function(req,res){

    res.send(__dirname)

})
router.post('/post_blog', function(req,res){

        var authorname = req.body.authorname;
        var blog = req.body.blog;
        var datee = new Date();
        var month = datee.getMonth()+1;
    var day = datee.getDate();
    var year = datee.getFullYear();
    var date_formated = month+"/"+day+"/"+year
        var data = {
        "authorname":authorname,
            "blog":blog,
            "date":date_formated
            
        
        }
        var db = req.db;
    var collection = db.get('blog')
    collection.insert(data);
    
        res.redirect('/blog');

})

module.exports = router;