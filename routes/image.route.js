const express = require('express');
const { root, newImage, findImgById, retrieveAllImages, updateImgById, removeImgById, removeAllImg } = require('../controllers/image.controller');

const Router = express.Router();

Router.get('/', root);
Router.post('/newimage', newImage);
Router.get('/findimgbyid/:id', findImgById)
Router.get('/retrieveallimages', retrieveAllImages)
Router.put('/updateimgbyid/:id', updateImgById)
Router.delete('/removeimgbyid/:id', removeImgById)
Router.delete('/removeallimg', removeAllImg)

module.exports = Router;
  




/*
module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
  }; */