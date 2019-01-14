'use strict'

// const showToast = require('../toastr/toasts')

// assigns our handlebars template to variables
const allLogsTemplate = require('../templates/get-all-logs.handlebars')
const allMyLogsTemplate = require('../templates/get-all-my-logs.handlebars')
const oneLogTemplate = require('../templates/get-one-log-form.handlebars')
// const myLatestPostTemplate = require('../templates/get-my-latest-post.handlebars')

// runs on a succesful create post
const createLogSuccess = apiData => {
  // uses toastr to tell user of a succesful create posts
  // Look in auth/ui for a greater explanation of how toastr works
  // showToast('createpost-pass', 'post')
  // clears form data
  $('#new-log')[0].reset()
}

const createLogFailure = apiData => {
  // console.log(apiData)
  // showToast('createpost-fail', 'post')
}

const getAllLogsSuccess = apiData => {
  // console.log(apiData)
  // showToast('allposts-pass', 'post')

  // calls the handlebars template "allPostsTemplate"
  // with the api response data, structured in a posts object
  // the handlebars template is a js function that can accept data as an object.
  const allTheLogs = allLogsTemplate({ logs: apiData.logs })
  // inserts the formatted template data into the DOM
  $('#feed').html(allTheLogs)
  return ''
}

const getAllLogsFailure = apiData => {
  // console.log(apiData)
  // showToast('allposts-fail', 'post')
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
  // showToast('updatepost-pass', 'post')

  $('#update-modal').modal('hide')
  return ''
}

const updateLogFailure = apiData => {
  // console.log(apiData)
  // console.log(`you didn't update a post!`)
  // showToast('updatepost-fail', 'post')
}

const deleteLogSuccess = apiData => {
  // console.log(apiData)
  // showToast('deletepost-pass', 'post')
}

const deleteLogFaliure = apiData => {
  // console.log(apiData)
  // showToast('deletepost-fail', 'post')
}

const getAllMyLogsSuccess = apiData => {
  // console.log(apiData)
  const allMyLogs = allMyLogsTemplate({ logs: apiData.logs })
  $('#feed').html(allMyLogs)
  // showToast('allmyposts-pass', 'post')
}

const getAllMyLogsFailure = apiData => {
  // console.log(apiData)
  // showToast('allmyposts-fail', 'post')
}

const getOneLogSuccess = apiData => {
  // console.log(apiData)
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
