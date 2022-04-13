const Drink = require('../models/Drink.model');
module.exports.drinksController = {
    getAllDrinks: async (req, res) => {
        try {
            const data = await Drink.find({}, 'title price')
            res.json(data)
        } catch (e) {
            res.json({e: "Ошибка при добавлении нового напитка"})
        }
    },
    getDrinksInStock: async (req, res) => {
       try {
            const data = await Drink.find({inStock: true})
            res.json(data)
        } catch (e) {
           res.json({e: "Ошибка при добавлении нового напитка"})
       }
    },
    getDrinkById: async (req, res) => {
        try {
            const data = await Drink.findById(req.params.id)
            res.json(data)
        } catch (e) {
            res.json({e: "Ошибка при добавлении нового напитка"})
        }
    },
    postDrink: async (req, res) => {
        try{
            const {title, price, inStock, caffeine, volume, description} = req.body
            const data = await Drink.create({title, price, inStock, caffeine, volume, description})
            res.json(data)
        } catch (e) {
            res.json({e: "Ошибка при добавлении нового напитка"})
        }
    },
    deleteDrinkById: async (req, res) => {
        try {
            const data = await Drink.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (e) {
            res.json({e: "Ошибка при добавлении нового напитка"})
        }
    },
    patchDrinkById: async (req, res) => {
        try {
            const {title, price, inStock, caffeine, volume, description} = req.body
            const data = await Drink.findByIdAndUpdate(
                req.params.id,
                {title, price, inStock, caffeine, volume, description}
            )
            res.json(data)
        } catch (e) {
            res.json({e: "Ошибка при добавлении нового напитка"})
        }
    }

}