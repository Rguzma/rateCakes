const mongoose = require( 'mongoose' );
const cakesSchema = new mongoose.Schema({
    baker: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    rate:[
        Number,
        
    ],
    comment:[
        String
    ]
    
},{
            timestamps:true
     
    
});

const Cake = mongoose.model('cakes', cakesSchema);

const CakeModel = {
    save: function(createdCake){
        return Cake.create(createdCake);
    },
    findAll: function(){
        return Cake.find();
    },
    findTask: function(id){
        console.log("lo que busca lafuncion ",Cake.findById(id));
        return Cake.findById(id);
    },
    findandUpdate: function(updatedCakes, id){
        // console.log("break the object: "+updateMongoose.mName+" "+updateMongoose.age);
        return Cake.findByIdAndUpdate({_id:id}, {$push: {rate: updatedCakes.rate, comment:updatedCakes.comment}});
    },

    // delete: function(id){
    //     return Task.findOneAndRemove({_id:id});
    // }

}


module.exports = {
    CakeModel
};