const express = require('express')
const router = express.Router()
const Comment = require('../models/comment')
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
    const comments = await Comment.find()
    res.json(comments)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', verifyToken, getComment, (req, res) => {
  res.json(res.comment)
})

// Creating one
router.post('/', async (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    club: req.body.club,
    comment: req.body.comment
  
  })
  try {
    const newComment = await comment.save()
    res.status(201).json(newComment)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getComment, async (req, res) => {
  if (req.body.name != null) {
    res.comment.name = req.body.name
  }
  if (req.body.club != null) {
    res.comment.club = req.body.club
  }
  if (req.body.comment != null) {
    res.comment.comment = req.body.comment
  }
 
  try {
    const updatedComment = await res.comment.save()
    res.json(updatedComment)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getComment, async (req, res) => {
  try {
    await res.comment.remove()
    res.json({ message: 'Deleted comment' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getComment(req, res, next) {
  let comment
  try {
    comment = await Comment.findById(req.params.id)
    if (comment == null) {
      return res.status(404).json({ message: 'Cannot find comment' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.comment = comment
  next()
}

module.exports = router