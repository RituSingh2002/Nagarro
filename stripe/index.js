var express=require('express');
var router =express.Router();
const stripe=require("stripe")('sk_test_51JFFYcSCiiQx5GC6IzojeCB0ext0i5k72kyjkI41tk0ZxD80j0jsWrRsKMIXnHJCMLuMP8CkCUTKObjsySwe1WXd00hRaR4Hpn');
// Get Home Page
router.get('/',function(req,res,next){
    res.render('index',{title :'Stripe Checkout Example'});

});
router.post('/create-checkout-session',async function(req,res,next){
    try{
        const session=await stripe.checkout.session.create({
            customer:'cus_KudUxj75qTue5P',
            payment_method_types:["card"],
            mode:"payment",
            line_items:[{
                price :'price_1kEoG2SHKFpjeywqDvm3EbiI',
                quantity:req.body.quantity
            }],

success_url:'http://localhost:4900/success.html?id={CHECKOUT SESSION ID}',
cancel_url:'http://localhost:4900/success.html',
})
res.send({id:session.id});
    }catch(e){
        throw new Error(e);
    }
});
module.export=router;