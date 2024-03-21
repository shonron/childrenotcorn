

const express = require ('express')
const app = express()

var paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AV5r-AVby_Osjv5ypPmc_Wb4pG3_0lhoHKJHA9Tkv_94NQAWUFdAvJ7wAywPR2Y7VzC95JEBbaJ3jsAq',
  'client_secret': 'EIqGVbGJ97jVOA4uZrIAU41_FKg70qW53szHa2TPHSvdSod8qval94eo0KvWKgYh2BuX3AT-5m_RxeZ7'
}); 

app.get("/api",(req,res) =>{
	res.json({"users": ["userOne", "userTwo"]})
	
})

app.post('/pay',(req,res) => {
	
	paypal.openIdConnect.authorizeUrl({'scope': 'openid profile'});

// Get tokeninfo with Authorize code
paypal.openIdConnect.tokeninfo.create("Replace with authorize code", function(error, tokeninfo){
  console.log(tokeninfo);
});

// Get tokeninfo with Refresh code
paypal.openIdConnect.tokeninfo.refresh("Replace with refresh_token", function(error, tokeninfo){
  console.log(tokeninfo);
});

// Get userinfo with Access code
paypal.openIdConnect.userinfo.get("Replace with access_code", function(error, userinfo){
  console.log(userinfo);
});

// Logout url
paypal.openIdConnect.logoutUrl("Replace with tokeninfo.id_token");

var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://return.url",
        "cancel_url": "http://cancel.url"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Woodlawn",
                "sku": "001",
                "price": "19.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "19.00"
        },
        "description": "Buy Woodlawn The End of the World"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        console.log(payment);
    }
});
});






app.listen(5000, () => {console.log("started")})