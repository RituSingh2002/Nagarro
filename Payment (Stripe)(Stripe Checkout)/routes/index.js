var express=require('express');
require("dotenv").config()
var router=express.Router();
const stripe=require("stripe")(process.env.url);
router.get('/',function(req,res,next){
    res.render('index',{title:'Stripe Checkout Example'});

});
router.post('/create-checkout-session',async function(req,res,next){
    try{
        console.log("In Session")
        const session=await stripe.checkout.sessions.create({
            mode:"payment",
            line_items:[{
                 price:'price_1LU9GuSCiiQx5GC6lgchkYat',
                quantity:req.body.quantity
            }],
            success_url:'http://localhost:4900/success.html?id={CHECKOUT_SESSION_ID',
            cancel_url:'http://localhost:4900/cancel.html',
        })
        res.send({id:session.id});
    }catch(e){
        throw new Error(e);
    }
});
module.exports=router;