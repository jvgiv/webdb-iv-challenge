const express = require('express')

const Dishes = require('./dishesModel')

const router = express.Router()



router.post('/', async (req, res) => {
    try {
        const dishes = await Dishes.addDish(req.body)
        res.status(200).json(dishes)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Couldn't add that post"
        })
    }
})

router.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes()
        res.status(200).json(dishes)
    } catch (error) {
        res.status(500).json({
            message: "The posts could not be retrieved."
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const dish = await Dishes.getDishes(req.params.id)
        res.status(200).json(dish)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'get rekt loser'
        })
    }
})


module.exports = router