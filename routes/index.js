var express= require('express')
var router = express.Router()

router.get('/',function(req,res){

    res.render('index',{title:'Reserve my place',data:'dude'})

})

module.exports = router;