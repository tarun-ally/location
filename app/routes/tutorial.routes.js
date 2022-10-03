module.exports=app => {
    const tutorials=require("../controllers/tutorial.controller.js");
    var router=require("express").Router();
    // create a new tutorial
    console.log('insede');
    router.post("/",tutorials.create);
    // Retrive all tutorials
    router.get("/",tutorials.findAll);
    // Retrive all published tutorials
    router.get("/location",tutorials.findAllLocation);

    // retrive a single tutorial with id
    router.get('/:id',tutorials.findOne);
    // update a tutorial with id
    router.put("/:id",tutorials.update);
    // delete a tutorial with id
    router.delete('/:id',tutorials.delete);
    // create a new tutorial
    // router.delete("/",tutorials.deleteAll);
    app.use('/api/tutorials',router);

}