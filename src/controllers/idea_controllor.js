const Idea = require('../db/models/Idea_model');

const getAllIdeas = async function (req, res, next) {
    try {
        const ideas = await Idea.find();
        res.json(ideas);
    } catch (error) {
        next(error)
    }
}

const getOneIdea = async function (req, res, next) {
    try {
        const { id } = req.params;
        const idea = await Idea.findById(id);
        if (!idea) {
            res.json({
                message: "Invalid Id. Please Check the id!"
            })
        } else {
            res.json(idea);
        }

    } catch (error) {
        next(error);
    }
}

const createIdea = async function (req, res, next) {
    try {
        console.log(req.body);
        const idea = new Idea(req.body);
        await idea.save();
        res.json(idea);
    } catch (error) {
        next(error);
    }
}

const updateIdea = async function (req, res, next) {
    try {
        const { id } = req.params;
        const idea = await Idea.findOneAndUpdate({ "_id": id }, req.body, { new: true });
        if (!idea) {
            res.json({
                message: "Invalid Id. Please Check the id!"
            });
        } else {
            res.json(idea);
        }
    } catch (error) {
        next(error);
    }
}

const deleteIdea = async function (req, res, next) {
    try {
        const { id } = req.params;
        const idea = await Idea.findByIdAndDelete(id);
        if (!idea) {
            res.json({
                message: "Invalid Id. Please Check the id!"
            });
        } else {
            res.json(idea);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllIdeas,
    getOneIdea,
    createIdea,
    updateIdea,
    deleteIdea
}