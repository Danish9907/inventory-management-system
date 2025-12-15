import mongoose from "mongoose"
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
       
    },
    price: {
        type: Number,
        required: true,
      
    },
    
  totalValue: {
    type: Number,
    default:0
  }
   
    
},{
    timestamps:true,
})




itemSchema.pre("save", function () {
  this.totalValue = this.quantity * this.price;
  
});


const Item = mongoose.model('Item', itemSchema)
export default  Item