const db=require("../models");
const Tutorial=db.tutorials;
// Create and Save a new Tutorial
exports.create=(req,res) => {
    // validate request
    // if(!req.body.title) {
    //     res.status(400).send({message: "Content can not be empty!"});
    //     return;
    // }
    // {
    //     "location": ["nice"],
    //         "state": "kite"
    // }
    console.log(req.body,'red');
    if(!req.body.location) {
        res.status(400).send({message: "location can not be empty!"});
        return;
    }
    if(!req.body.state) {
        res.status(400).send({message: "state can not be empty!"});
        return;
    }
    // create tutorial
    const tutorial=new Tutorial({
        state: req.body.state,
        // description: req.body.description,
        location: req.body.location,

        // published: req.body.published? req.body.published:false
    })
    // save tutorial to database
    tutorial.save(tutorial)
        .then(data => {
            res.send({
                status: 200,
                message: 'Successfully Created'
            });
        }).catch(err => {
            res.status(500).send({
                message: err.message||"Some error occured while creating the tutorial."
            });
        });
};
// Retrieve all state location from the database.
exports.findAll=(req,res) => {

    // const state=req.query.state;
    // var condition=state? {state: {$regex: new RegExp(state),$options: "i"}}:{};
    // res.send('hi');

    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message||"Some error occured while retriving tutorials."

            });
        });



};
// Find a single Tutorial with an id
exports.findOne=(req,res) => {

    const id=req.params.id;
    Tutorial.findById(id)
        .then(data => {

            if(!data) {
                return res.status(404).send({message: "Not found with id "+id});


            } else {
                return res.send(data);
            }

        })
        .catch(err => {
            res.status(500)
                .send({message: "Error retrieving Tutorial with id="+id});
        });
};
// Update a Tutorial by the id in the request
exports.update=(req,res) => {

    if(!req.body) {
        message: "data to update can not be empty!"
    }
    const id=req.params.id;
    Tutorial.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id = ${id}.Maybe Tutorial was not found!`
                })
            } else {
                return res.send({message: "Tutorial was updated successfully."});
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id="+id
            });
        });

};
// Delete a Tutorial with the specified id in the request
exports.delete=(req,res) => {
    const id=req.params.id;
    Tutorial.findByIdAndRemove(id)
        .then(data => {

            if(!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id="+id
            });
        });
};
// Delete all Tutorials from the database.
exports.deleteAll=(req,res) => {
    Tutorial.deleteMany({})
        .then(data => {
            res.send({

                message: `${data.deletedCount} Tutorial were deleted successfully!`
            }
            )
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message||"Some error occured while removing all tutorials.."
            })
        })
};
// Find all published Tutorials
// exports.findAllPublished=(req,res) => {
//     Tutorial.find({published: true})
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message||"Some error occurred while retrieving tutorials. "
//             });
//         });
// };
exports.findAllLocation=(req,res) => {
    Tutorial.find({location: []})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message||"Some error occurred while retrieving tutorials. "
            });
        });
};
