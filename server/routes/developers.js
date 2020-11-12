const express = require('express')
const router = express.Router()
const Developer = require('../models/developer')

// Getting all
router.get('/', async (req, res) => {
  try {
    const developers = await Developer.find()
    res.json(developers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getDeveloper, (req, res) => {
  res.json(res.developer)
})

// Creating one
router.post('/', async (req, res) => {
  const developer = new Developer({
    name: req.body.name,
    position: req.body.position,
    image: req.body.image,
    github: req.body.github,
    email: req.body.email
  })
  try {
    const newDeveloper = await developer.save()
    res.status(201).json(newDeveloper)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getDeveloper, async (req, res) => {
  if (req.body.name != null) {
    res.developer.name = req.body.name
  }
  if (req.body.position != null) {
    res.developer.position = req.body.position
  }
  if (req.body.image != null) {
    res.developer.image = req.body.image
  }
  if (req.body.github != null) {
    res.developer.github = req.body.github
  }
  if (req.body.email != null) {
    res.developer.email = req.body.email
  }
  try {
    const updatedDeveloper = await res.developer.save()
    res.json(updatedDeveloper)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getDeveloper, async (req, res) => {
  try {
    await res.developer.remove()
    res.json({ message: 'Deleted developer' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getDeveloper(req, res, next) {
  let developer
  try {
    developer = await Developer.findById(req.params.id)
    if (developer == null) {
      return res.status(404).json({ message: 'Cannot find developer' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.developer = developer
  next()
}

module.exports = router