const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    ideaName: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now()}
});

const Idea = mongoose.model('Idea', IdeaSchema);

module.exports = Idea;