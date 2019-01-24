'use strict'

const showToast = require('../toastr/toasts')

const uploadSuccess = function (data) {
  console.log('success data is:', data)
  showToast('createupdate-pass', 'update')
}

const uploadError = function (error) {
  console.log('error is:', error)
  showToast('createupdate-fail', 'update')
}

// runs on a succesful create post
const createUploadSuccess = apiData => {
  // uses toastr to tell user of a succesful create posts
  // Look in auth/ui for a greater explanation of how toastr works
  showToast('createupdate-pass', 'update')
  // clears form data
  // $('#new-log')[0].reset()
  // $('#create-log-message').text('Created Log Successfully!')
  // emptyMessage()
}

const createUploadFailure = apiData => {
  // console.log(apiData)
  showToast('createupdate-fail', 'update')
  // $('#create-log-message').text('Error Creating Log!')
  // emptyMessage()
}

// const getOneSuccess = function (error) {
//   console.log('success data is:', error)
// }
//
// const getOneError = function (error) {
//   console.log('error is:', error)
// }

module.exports = {
  uploadSuccess,
  uploadError,
  createUploadSuccess,
  createUploadFailure
  // getOneSuccess,
  // getOneError
}
