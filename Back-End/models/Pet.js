const {Schema,model}=require('mongoose')

const petSchema=new Schema({
    name:{
        type:String,
        required:[true,"Pet Name Is Required!"],
        min:[1,"Pet name Must Have Atleast one character"]
    },
    petType:{
        type:String,
        enum:['bird','dog','reptile','cat'],
        required:true
    },
    breed:{
        type:String,
        required:[true,"Pet Breed Is Required!"],
    },
    petParent:{
        type:Schema.Types.ObjectId,
        required:[true,"Pet Must Have An Owner"],
    },
    petDetails:{
        type:String,
        default:" "
    }
})

module.exports=model('Pet',petSchema)