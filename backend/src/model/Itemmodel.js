const mongoose=require('mongoose')
const {schema}=mongoose;


const IngredientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
})


const CommentSchema=new mongoose.Schema({
    user:{
        type:String,
    required:true
    },
    comment:{
        type:String,
    required:true
    }
})


const moreSchema=new mongoose.Schema({
    prep_time:{
        type:String,
        required:true
    },
    cook_time:{
        type:String,
        required:true
    },
    serving:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    }
})

const ItemSchema=new mongoose.Schema({
menuId:{
    type:Number,
    required:true
},
name:{
    type:String,
    required:true
},
thumbnail_image:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
instruction:{
    type:String,
    required:true
},
tags:{
    type:[String],
},
ingredients:{
    type:[IngredientSchema],
    required:true
},
comment:{
    type:[CommentSchema],
    required:true
},
more:{
    type:[moreSchema],
    required:true
}


})


const Item=mongoose.model('Item',ItemSchema)

module.exports=Item