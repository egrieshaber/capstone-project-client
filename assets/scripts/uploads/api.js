'use strict'

const store = require('../store.js')
const config = require('../config.js')
// const userStore = require('../store.js')
//
// const userStore = require('../userStore.js')
//
// const upload = function (formData) {
//   console.log('hi there')
//   const userToken = userStore.user.user.token
//   console.log(userStore.user)
//   return $.ajax({
//     url: config.apiUrl + '/uploads',
//     method: 'POST',
//     data: formData,
//     headers: {Authorization: `Token token=${userToken}`},
//     contentType: false,
//     processData: false
//   })
// }

// uploading an audio file
const createMulti = function (data) {
  return $.ajax({
    url: config.apiUrl + '/uploads/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data,
    contentType: false,
    processData: false
  })
}

// const getOneMulti = multiId => {
//   const userToken = userStore.user.token
//   return $.ajax({
//     url: config.apiUrl + `/logs/${multiId}`,
//     method: 'GET',
//     headers: {Authorization: `Token token=${userToken}`}
//   })
// }

module.exports = {
  // upload
  createMulti
  // getOneMulti
}
