const express = require( 'express');
const CakeRouter = express.Router();
const {CakeController} = require( '../controllers/cakeController.js' );

CakeRouter

    .get ('/cakes', CakeController.allCakes)

    .get ('/cakes/:_id', CakeController.seeCake)

    .post('/cakes', CakeController.createCake)

    .put('/cakes/:_id', CakeController.updateCake)

    // .delete ('/cakes/:_id', TaskController.removecake)



    module.exports = {
        CakeRouter
    };
    