const { Schema, model } = require('mongoose');
const { ObjectId } = Schema.Types;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        default: "No image"
    },
    author: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

module.exports = model('Post', postSchema);
