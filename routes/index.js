var express= require('express')
var router = express.Router()

router.get('/',function(req,res){

    res.render('index',{title:'Reserve my place',data:'dude'})

})

router.get('/login',function(req,res){
    res.render('login',{title:'Login'})

})

module.exports = router;