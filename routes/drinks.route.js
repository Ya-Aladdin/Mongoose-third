const {Router} = require('express');
const {drinksController} = require('../controllers/drinks.controller');

const router = Router();

router.get('/drinks', drinksController.getAllDrinks);
router.get('/drinks/in-stock', drinksController.getDrinksInStock);
router.get('/drinks/:id', drinksController.getDrinkById);
router.post('/drinks', drinksController.postDrink);
router.delete('/drinks/:id', drinksController.deleteDrinkById);
router.patch('/drinks/:id', drinksController.patchDrinkById);

module.exports = router;