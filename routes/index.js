var express= require('express')
var router = express.Router()

router.get('/',function(req,res){

    res.send("Router working !")

})

module.exports = router;