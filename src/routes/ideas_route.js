const express = require('express');
const router = express.Router();
const ideaContorller = require('../controllers/idea_controllor');

//get all ideas 
router.get('/', ideaContorller.getAllIdeas);

//get one idea
router.get('/:id', ideaContorller.getOneIdea);

//post an idea
router.post('/', ideaContorller.createIdea);

//update an idea
router.put('/:id', ideaContorller.updateIdea);

//delete an idea
router.delete('/:id', ideaContorller.deleteIdea);

module.exports = router;