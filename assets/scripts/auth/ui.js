const store = require('../store')
// const posts = require('../post/post-event.js')
// const showToast = require('../toastr/toasts')

// showToast requires ui action as param to display
// feedback to the user

// creates ui response showing successful sign up
const signUpSuccess = () => {
  // clear form values for signup form
  $('#sign-up')[0].reset()

  // showToast takes is two arguments, (action, event)
  // look at the scripts/toastr/toasts.js module to see how these arguments are used.
  // showToast('signup-pass', 'ui')
}

const signUpFailure = () => {
  // clear form values
  $('#sign-up')[0].reset()

  // showToast('signup-fail', 'ui')
}

const signInSuccess = data => {
  // clear form values
  $('#sign-in')[0].reset()

  // assigns api response data into the store object within store.js
  // the data's user object is assigned to a user object within the store
  store.user = data.user

  // user login feedback
  // showToast('signin-pass', 'ui')

  // toggle view for online users
  // changes the page view so that signed in users will see their facebird feed
  // will also hide the sign in / up forms
  $('#sign-up').toggle()
  $('#sign-in').toggle()
  // #facebird represent the header
  $('#facebird').toggle()
  // user online represents the feed page view
  $('#user-online').toggle()

  return ''
}

const signInFailure = () => {
  // clear form values
  $('#sign-in')[0].reset()

  // showToast('signin-fail', 'ui')
}

const changePassSuccess = () => {
  // $('#change-pass-form')[0].reset()

  // showToast('changepass-success', 'ui')

  // clears password form (should be standarized. Does the same thing as $('.pass-form')[0].reset())
  $('.pass-form').val('')
  // hides modal
  $('#user-modal').modal('hide')
}

const changePassFailure = () => {
  // clear password form
  $('.pass-form').val('')

  // showToast('changepass-fail', 'ui')
}

const signOutSuccess = () => {
  // showToast('signout-pass', 'ui')

  // return to the first view
  $('#sign-up').toggle()
  $('#sign-in').toggle()
  $('#facebird').toggle()
  $('#user-online').toggle()
  // close user-auth modal
  $('#user-modal').modal('hide')

  // removes user data from the local store
  store.user = ''
}

const signOutFailure = () => {
  // showToast('signout-fail', 'ui')

  // still removes user data from the local store.
  store.user = ''
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
