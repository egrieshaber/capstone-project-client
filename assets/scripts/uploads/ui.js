'use strict'

const uploadSuccess = function (data) {
  console.log('success data is:', data)
}

const uploadError = function (error) {
  console.log('error is:', error)
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
  uploadError
  // getOneSuccess,
  // getOneError
}
