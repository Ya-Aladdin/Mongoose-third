const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
    title: String,
    price: Number,
    inStock: Boolean,
    caffeine: Boolean,
    volume: Number,
    description: String
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;