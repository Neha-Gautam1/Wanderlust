const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
      type:String,
      required:true,
    },
    description:String,
    image:{
      type:String,
      default:"https://unsplash.com/images/nature/landscape",
      set:(v) => v === "" ? "https://unsplash.com/images/nature/landscape" : v,
    },
    price:Number,
    location:String,
    country:String,
    reviews:[
      {
        type:Schema.Types.ObjectId,
        ref:"Reviews",
      }
    ]
  });

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;