'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./log-api.js')
const ui = require('./log-ui.js')

const addLogEventListeners = () => {
  // most event listeners will need to be chained onto the return of
  // post data from the api (aka, on sign in/get all posts)
  // handle the function for toggling the page view between full feed and own posts
  // change is an event listener that listens to the state of the checkbox within change-view
  // checkbox is a boolean type of input
  $('#change-view :checkbox').change(changeFeedView)
  // runs function on submit of new post form data
  $('#new-log').on('submit', onCreateLog)
}

// adds event handlers for individual posts once they are returned from the api
const addLogHandlers = () => {
  // update post button handler
  $('.update-log').on('click', showUpdate)
  // delete post button handler
  $('.delete-log').on('click', onDeleteLog)
  return ''
}

// current View on all post feed is false.
// allows for toggling between feed views
let currentFeedView = false

const changeFeedView = () => {
  // feed contains all users posts after sign-in
  // shows/hides create post form
  $('#create-log-container').toggle()
  // shows/hides most recent post
  // $('#recent-log-container').toggle()
  // if my posts arent in the view
  if (!currentFeedView) {
    // add my posts to the feed
    currentFeedView = true
    onGetAllMyLogs()
  } else {
    // add all posts to the feed
    onGetAllLogs()
    currentFeedView = false
  }
}

// when an individual post is returned from the api
// add the submit handler for updating post content
const addLogUpdateButton = () => {
  $('#update-text').on('submit', onUpdateLog)
}

// after edit button is clicked,
// retrieve the post that was clicked on
// with the post.text as the value in the edit form
const showUpdate = event => {
  event.preventDefault()

  // assigns data-id of the parent section of the clicked post to a variable

  const logId = $(event.target).closest('section').data('id')
  // launches the update modal
  $('#update-modal').modal('show')
  // calls function to retrieve the post data
  api.getOneLog(logId)
    // adds api data for post into modal body via handlebars
    .then(ui.getOneLogSuccess)
    // triggers event handler for submitting the update
    .then(addLogUpdateButton)
    // missing error handler
    .catch()
}

const onCreateLog = event => {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createLog(data)
    .then(ui.createLogSuccess)
    // refreshes all my post on page to show that the new post was created
    .then(onGetAllMyLogs)
    .catch(ui.createLogFailure)
}

// const onGetLatestPost = () => {
//   // Because Get Latest Post can be called on page load or a button click,
//   // checks if event is truthy before running prevent default
//   if (event) { event.preventDefault() }
//
//   api.getLatestPost()
//     .then(ui.getLatestPostSuccess)
//     .catch(ui.getLatestPostFailure)
// }

const onGetAllLogs = event => {
  if (event) { event.preventDefault() }

  api.getAllLogs()
    .then(ui.getAllLogsSuccess)
    // adds event handlers for all posts
    // here for future app version for when liking is possible
    .then(addLogHandlers)
    .catch(ui.getAllLogsFailure)
  // work around because onGetLatestPost wasn't being called on the getAllPosts event chain.
  // onGetLatestPost()
  return ''
}

// does the AJAX request when a log is updated.
const onUpdateLog = event => {
  event.preventDefault()

  const formData = getFormFields(event.target)

  const logId = $(event.target).closest('section').data('id')

  api.updateLog(formData, logId)
    .then(ui.updateLogSuccess)
    .then(onGetAllMyLogs)
    .catch(ui.updateLogFailure)

  // onGetLatestPost()
}

const onDeleteLog = () => {
  event.preventDefault()

  const logId = $(event.target).closest('section').data('id')
  api.deleteLog(logId)
    .then(ui.deletePostSuccess)
    // calls the get all my posts to show that the post has been deleted
    .then(onGetAllMyLogs)
    .catch(ui.deleteLogFaliure)

  // onGetLatestPost()
}

const onGetAllMyLogs = () => {
  api.getAllMyLogs()
    .then(ui.getAllMyLogsSuccess)
    .then(addLogHandlers)
    .catch(ui.getAllMyLogsFailure)
}

module.exports = {
  addLogEventListeners,
  onGetAllLogs,
  onGetAllMyLogs,
  changeFeedView
}
