const express = require('express')
const router = express.Router()
const Committee = require('../models/committee')

// Getting all
router.get('/', async (req, res) => {
  try {
    const committee = await Committee.find()
    res.json(committee)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getCommittee, (req, res) => {
  res.json(res.Committee)
})

// Creating one
router.post('/', async (req, res) => {
  const committee = new Committee({
    name: req.body.name,
    position: req.body.position,
    image: req.body.image,
    headline: req.body.headline,
    comment: req.body.comment,
    whatsapp: req.body.whatsapp,
    email: req.body.email,

  })
  try {
    const newCommittee = await committee.save()
    res.status(201).json(newCommittee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getCommittee, async (req, res) => {
  if (req.body.name != null) {
    res.committee.name = req.body.name
  }
  if (req.body.position != null) {
    res.committee.position = req.body.position
  }
  try {
    const updatedCommittee = await res.committee.save()
    res.json(updatedCommittee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getCommittee, async (req, res) => {
  try {
    await res.committee.remove()
    res.json({ message: 'Deleted committee' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getCommittee(req, res, next) {
  let committee
  try {
    committee = await Committee.findById(req.params.id)
    if (committee == null) {
      return res.status(404).json({ message: 'Cannot find committee' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.committee = committee
  next()
}

module.exports = router