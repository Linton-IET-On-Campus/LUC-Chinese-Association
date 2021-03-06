const express = require('express')
const router = express.Router()
const Committee = require('../models/committee')
const jwt = require('jsonwebtoken')


function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

// Getting all
router.get('/',  async (req, res) => {
  try {
    const committees = await Committee.find()
    res.json(committees)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id',  getCommittee, (req, res) => {
  res.json(res.committee)
})

// Creating one
router.post('/', verifyToken, async (req, res) => {
  const committee = new Committee({
    name: req.body.name,
    position: req.body.position,
    image: req.body.image,
    headline: req.body.headline,
    comment: req.body.comment,
    whatsapp: req.body.whatsapp,
    email: req.body.email
  })
  try {
    const newCommittee = await committee.save()
    res.status(201).json(newCommittee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', verifyToken, getCommittee, async (req, res) => {
  if (req.body.name != null) {
    res.committee.name = req.body.name
  }
  if (req.body.position != null) {
    res.committee.position = req.body.position
  }
  if (req.body.image != null) {
    res.committee.image = req.body.image
  }
  if (req.body.headline != null) {
    res.committee.headline = req.body.headline
  }
  if (req.body.comment != null) {
    res.committee.comment = req.body.comment
  }
  if (req.body.whatsapp != null) {
    res.committee.whatsapp = req.body.whatsapp
  }
  if (req.body.email != null) {
    res.committee.email = req.body.email
  }
  try {
    const updatedCommittee = await res.committee.save()
    res.json(updatedCommittee)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', verifyToken, getCommittee, async (req, res) => {
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