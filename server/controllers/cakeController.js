const {CakeModel} = require( '../models/cakeModel.js' );


const CakeController ={
    allCakes: function(request, response){
        CakeModel.findAll()
        .then(data => response.json(data))
        .catch(err => response.json(err));
    },


    seeCake: function(request, response){
        console.log("The mongoose id requested is: ", request.params);
        let id = request.params._id;
        console.log("id llega al controlador?", id);
        CakeModel.findTask(id)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },

    createCake: function(request, response){
        // console.log("The mongoose id requested is: ", request.params._id);
        let baker = request.body.baker;
        let image = request.body.image;

        createdCake = {
            baker,
            image,


        };
        CakeModel.save(createdCake)
        .then(data => response.json(data))
        .catch(err => response.json(err));
        
    },

    updateCake: function(request, response){
        let id = request.params._id;
        let comment = request.body.comment;
        let rate = request.body.rate;
        updatedCakes = {
            comment,
            rate,
 
        };
        console.log(id);
        console.log("comentario: ",updatedCakes.comment)
        console.log("rate: ",updatedCakes.rate)

        CakeModel.findandUpdate(updatedCakes, id)
        .then(data => response.json(data))
        .catch(err => response.json(err));

    },

    // removeTask: function(request, response){
    //     // console.log("The mongoose id requested is: ", request.params._id);
    //     let id = request.params._id;
    //     TaskModel.delete(id)
    //     .then(data => response.json(data))
    //     .catch(err => response.json(err));
        
    // },


}


module.exports = {
    CakeController
};