'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const logEvents = require('./log/log-event')
const uploadEvents = require('./uploads/events')

$(() => {
  // adds event handlers with auth/events.js
  authEvents.addEvents()
  // adds event handlers with log/post-event.js
  logEvents.addLogEventListeners()
  uploadEvents.addHandler()
  // $('#application-x-www-form-data').on('submit', uploadEvents.createUploadEncoded)
  $('#multipart-form-data').on('submit', uploadEvents.createUploadMultiPart)
})
