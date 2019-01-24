'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const addHandler = function () {
  $('#multipart-form-data').on('submit', onUploadFile)
}

const onUploadFile = function (event) {
  event.preventDefault()
  console.log(event)

  const formData = new FormData(event.target)

  api.createMulti(formData)
    .then(ui.createUploadSuccess)
    .catch(ui.createUploadFailure)

  // for (const pair of formData.entries()) {
  //   console.log(pair[0] + ', ' + pair[1])
  // }
}

// const onGetLatestUpload = () => {
//   // Because Get Latest Post can be called on page load or a button click,
//   // checks if event is truthy before running prevent default
//   if (event) { event.preventDefault() }
//   const multiId = $(event.target).closest('section').data('id')
//
//   api.getOneMulti(multiId)
//     .then(ui.getLatestPostSuccess)
//     .catch(ui.getLatestPostFailure)
// }

module.exports = {
  addHandler
  // onGetLatestUpload
}
