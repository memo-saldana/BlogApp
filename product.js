// var stripe = require ("stripe")('sk_test_ocLNJdBTBpiR9pZKoOXEtvqe')

// stripe.products.update('Class',{
//   shippable:false
// }, (err,product)=>{
//   if(err) console.log("Error: "+ err)
//   console.log(JSON.stringify(product));
// })

// stripe.orders.update("or_1DyralJjeMpSE7MyrLyweYxx", {
//   status:"canceled"
// }, (err,order)=>{
//   if(err) console.log( "Error: "+ err);
//   console.log(JSON.stringify(order));
// })


var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Zone", { useNewUrlParser: true });

var classSchema = new mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    schedule: [{
        day: {
            type: String
        },
        hour: {
            type: String
        },
        minute: {
            type: String
        }
    }],
    reservations : [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        customer: {
            type: String
        },
        // 1: row. 2: treadmill, 3: floor, 4: Double Floor
        type: {
            type: Number
        },
        // This number will be the number to be displayed on the front end (List of seats that can be reserved from 1-20). 
        number: {
            type: Number
        },
        // check if the user entered the class.
        bEntered: {
            type: Boolean
        }
    }],

    price: {
        type: Number
    },
    
    description: {
        type: String
    },
    room: {
        type: Number
    }
},{
  timestamp: true
})
var Class = mongoose.model("Class",classSchema);

console.log("Classes:")


Class.find({ schedule:{day:"Martes",hour:"",minute:""}}, (error, classes)=>{
  console.log("find")
  if(error){
    console.log("error")
    console.log(error)
  } else {
    if(classes){
      return console.log(classes)
    } else {
      return console.log("No encontro")
    }
  }
})