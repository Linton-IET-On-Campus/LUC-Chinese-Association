const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
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
router.get('/', verifyToken, async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', verifyToken, getContact, (req, res) => {
  res.json(res.contact)
})

// Creating one
router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
   
  })
  try {
    const newContact = await contact.save()
    res.status(201).json(newContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getContact, async (req, res) => {
  if (req.body.name != null) {
    res.contact.name = req.body.name
  }
  if (req.body.email != null) {
    res.contact.email = req.body.email
  }
  if (req.body.subject != null) {
    res.contact.subject = req.body.subject
  }
  if (req.body.message != null) {
    res.contact.message = req.body.message
  }

  try {
    const updatedContact = await res.contact.save()
    res.json(updatedContact)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getContact, async (req, res) => {
  try {
    await res.contact.remove()
    res.json({ message: 'Deleted contact' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getContact(req, res, next) {
  let contact
  try {
    contact = await Contact.findById(req.params.id)
    if (contact == null) {
      return res.status(404).json({ message: 'Cannot find contact' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.contact = contact
  next()
}

module.exports = router