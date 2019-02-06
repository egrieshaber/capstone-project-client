'use strict'

const showToast = require('../toastr/toasts')

// assigns our handlebars template to variables
const allLogsTemplate = require('../templates/get-all-logs.handlebars')
const allMyLogsTemplate = require('../templates/get-all-my-logs.handlebars')
const oneLogTemplate = require('../templates/get-one-log-form.handlebars')
// const myLatestPostTemplate = require('../templates/get-my-latest-post.handlebars')

// const emptyMessage = () => {
//   setTimeout(function () {
//     $('#create-log-message').text('')
//     $('#get-log-message').text('')
//     $('#update-log-message').text('')
//     $('#delete-log-message').text('')
//     $('#get-my-log-message').text('')
//   }, 1500)
// }

// runs on a succesful create post
const createLogSuccess = apiData => {
  // console.log(apiData)
  // uses toastr to tell user of a succesful create posts
  // Look in auth/ui for a greater explanation of how toastr works
  showToast('createlog-pass', 'log')
  // clears form data
  $('#new-log')[0].reset()
  // $('#create-log-message').text('Created Log Successfully!')
  // emptyMessage()
}

const createLogFailure = apiData => {
  // console.log(apiData)
  showToast('createlog-fail', 'log')
  // $('#create-log-message').text('Error Creating Log!')
  // emptyMessage()
}

const getAllLogsSuccess = apiData => {
  // console.log(apiData)
  // console.log('log success')
  showToast('alllogs-pass', 'log')

  // calls the handlebars template "allPostsTemplate"
  // with the api response data, structured in a posts object
  // the handlebars template is a js function that can accept data as an object.
  // console.log('more log success')
  const allTheLogs = allLogsTemplate({ logs: apiData.logs })
  // inserts the formatted template data into the DOM
  $('#feed').html(allTheLogs)
  // $('#create-log-message').text('Got all logs!')
  // emptyMessage()
  return ''
}

const getAllLogsFailure = apiData => {
  // console.log(apiData)
  showToast('allposts-fail', 'post')
  // $('#create-log-message').text('Error getting logs!')
  // emptyMessage()
}

// const getLatestPostSuccess = apiData => {
//   // console.log(apiData)
//
//   const latestPost = myLatestPostTemplate({ post: apiData.post })
//   $('#recent-post-container').html(latestPost)
//
//   // showToast('mylatestpost-success', 'post')
//   return ''
// }

// const getLatestPostFailure = () => {
//   // console.log('you failed')
//   showToast('mylatestpost-fail', 'post')
// }

const updateLogSuccess = apiData => {
  // console.log(apiData)
  showToast('updatelog-pass', 'log')
  // $('#update-log-message').text('Updated Log Successfully!')
  // emptyMessage()
  $('#update-modal').modal('hide')
  return ''
}

const updateLogFailure = apiData => {
  // console.log(apiData)
  // console.log(`you didn't update a post!`)
  showToast('updatelog-fail', 'log')
  // $('#update-log-message').text('Error Updating Log!')
  // emptyMessage()
}

const deleteLogSuccess = apiData => {
  // console.log(apiData)
  showToast('deletelog-pass', 'log')
  // $('#delete-log-message').text('Successfully deleted log!')
  // emptyMessage()
}

const deleteLogFaliure = apiData => {
  // console.log(apiData)
  showToast('deletelog-fail', 'log')
  // $('#delete-log-message').text('Error updating log!')
  // emptyMessage()
}

const getAllMyLogsSuccess = apiData => {
  // console.log(apiData)
  const allMyLogs = allMyLogsTemplate({ logs: apiData.logs })
  // $('#get-my-log-message').text('Success getting your logs!')
  // emptyMessage()
  $('#feed').html(allMyLogs)
  showToast('allmylogs-pass', 'log')
  showToast('message-pass', 'message')
}

const getAllMyLogsFailure = apiData => {
  // console.log(apiData)
  // console.log('get my logs failed')
  showToast('allmylogs-fail', 'log')
  // $('#get-my-log-message').text('Error getting your logs!')
  // emptyMessage()
}

const getOneLogSuccess = apiData => {
  console.log(apiData)
  const modalContent = oneLogTemplate({ log: apiData.log })
  $('#update-modal-body').html(modalContent)
}

module.exports = {
  createLogSuccess,
  createLogFailure,
  getAllLogsSuccess,
  getAllLogsFailure,
  updateLogSuccess,
  updateLogFailure,
  deleteLogSuccess,
  deleteLogFaliure,
  getAllMyLogsSuccess,
  getAllMyLogsFailure,
  getOneLogSuccess
  // getLatestPostSuccess,
  // getLatestPostFailure
}
