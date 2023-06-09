const { Schema, model } = require('mongoose');

const Contact = model('contact', new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    },
    {
        versionKey: false,
    }
));

module.exports = Contact;