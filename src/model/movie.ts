import {
    model,
    Schema
} from 'mongoose';

const movieSchema = new Schema({
    title: {
        type: String
    },
    rating: {
        type: Number
    },
    description: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
        type: Array
    },
    posters: {
        type: String
    },

}, {
    timestamps: true
});

export const movieModel = model('movie', movieSchema);