//Import mongoose model
const Image = require("../models/image.model");

exports.root = (req, res) => {

  const {name} = req.query;
  console.log(name);
  res.send(`Hello ${name}. Welcome to my Imgur app`);

}

// Create and Save a new image
exports.newImage = (req, res) => {
    
    // Validate request
    if (!req.body.imgMetadata) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Create an image
    const img = new Image({
      imgMetadata: req.body.imgMetadata,
      userName: req.body.userName
    });
    // Save image in the database
    img
      .save(img)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the image."
        });
      });

    };

// Retrieve all Posts from the database.
exports.findImgById = (req, res) => {
    const id = req.params.id;
    Image.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found image with id " + id });
        else res.send(data);
      })
      .catch(err => {
        console.log(err);
        res
          .status(500)
          .send({ message: "Error retrieving image with id=" + id });
      });
  }


// Find a single Post with an id
exports.retrieveAllImages = (req, res) => {

    Image.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving images."
        });
      });
  };



// Update a Post by the id in the request
exports.updateImgById = (req, res) => {
    /*if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }*/
    const id = req.params.id;
    Image.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update image with id=${id}. Maybe image was not found!`
          });
        } else res.send({ message: "image was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating image with id=" + id
        });
      });
  }


// Delete a Post with the specified id in the request
exports.removeImgById = (req, res) => {
    const id = req.params.id;
    Image.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete image with id=${id}. Maybe image was not found!`
          });
        } else {
          res.send({
            message: "image was deleted successfully!"
          });
        }
      })
      .catch(err => {

        console.log(err);
        res.status(500).send({
          message: `Could not delete image with id=${id}`

        });
      });
  }



// Delete all Posts from the database.
exports.removeAllImg = (req, res) => {
    Image.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} images were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  }
