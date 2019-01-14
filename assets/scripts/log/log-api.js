'use strict'

const config = require('../config.js')
const userStore = require('../store.js')

const createLog = data => {
  const userToken = userStore.user.token
  return $.ajax({
    url: config.apiUrl + '/logs',
    method: 'POST',
    headers: {Authorization: `Token token=${userToken}`},
    data: data
  })
}

const getAllLogs = () => {
  const userToken = userStore.user.token
  return $.ajax({
    url: config.apiUrl + '/logs',
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

// const getLatestPost = () => {
//   const userToken = userStore.user.token
//   return $.ajax({
//     url: config.apiUrl + '/posts/myLatestPost',
//     method: 'GET',
//     headers: {Authorization: `Token token=${userToken}`}
//   })
// }

const updateLog = (formData, logId) => {
  const userToken = userStore.user.token
  return $.ajax({
    url: config.apiUrl + `/posts/${logId}`,
    method: 'PATCH',
    headers: {Authorization: `Token token=${userToken}`},
    data: formData
  })
}

const deleteLog = logId => {
  const userToken = userStore.user.token
  return $.ajax({
    url: config.apiUrl + `/posts/${logId}`,
    method: 'DELETE',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const getAllMyLogs = () => {
  const userToken = userStore.user.token
  return $.ajax({
    url: config.apiUrl + '/logs/myLogs',
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const getOneLog = logId => {
  const userToken = userStore.user.token
  return $.ajax({
    url: config.apiUrl + `/posts/${logId}`,
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

module.exports = {
  createLog,
  getAllLogs,
  updateLog,
  deleteLog,
  getAllMyLogs,
  getOneLog
}
