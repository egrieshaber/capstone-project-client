// const store = require('../store')
const toastr = require('toastr')

// Toast constructor function takes in type, css, and msg as parameters.
function Toast (type, css, msg) {
  this.type = type
  this.css = css
  this.msg = msg
}

// uiToast is an object that defines which argument should be passed into the Toast constuctor
const uiToasts = {
  // when signup-pass is passed to showToast, it creates a Toast instance with
  // 'success' as the 'type'
  // 'toast-top-right' as the 'css'
  // and 'Signed-Up Successfully!' as the 'msg'
  'signup-pass': new Toast('success', 'toast-top-right', 'Signed-Up Successfully!'),
  'signout-pass': new Toast('success', 'toast-top-right', 'You signed out!'),
  'signin-pass': new Toast('success', 'toast-top-right', 'Signed In Successfully!'),
  'changepass-success': new Toast('success', 'toast-top-right', 'Successfully changed password'),
  'signin-fail': new Toast('warning', 'toast-top-right', 'Failed to Sign-In! Try Again ?'),
  'changepass-fail': new Toast('warning', 'toast-top-right', 'Failed to change password'),
  'signup-fail': new Toast('warning', 'toast-top-right', 'Failed to Sign-Up! Try Again ?'),
  'signout-fail': new Toast('warning', 'toast-top-right', 'You couldnt signed out!')
}

const logToasts = {
  'createlog-pass': new Toast('success', 'toast-top-right', 'Created a log!'),
  'createlog-fail': new Toast('warning', 'toast-top-right', 'Failed to create log!'),

  'alllogs-pass': new Toast('info', 'toast-top-right', 'Loading all logs...'),
  'alllogs-fail': new Toast('warning', 'toast-top-right', 'Failed to load all logs!'),

  'updatelog-pass': new Toast('info', 'toast-top-right', 'Updating log...'),
  'updatelog-fail': new Toast('warning', 'toast-top-right', 'Failed to update your log!'),

  'deletelog-pass': new Toast('success', 'toast-top-right', 'Removing your log...'),
  'deletelog-fail': new Toast('warning', 'toast-top-right', 'Failed to remove your log!'),

  'allmylogs-pass': new Toast('info', 'toast-top-right', 'Loading all of your logs...'),
  'allmylogs-fail': new Toast('warning', 'toast-top-right', 'Failed to load your logs!')
  // 'mylatestpost-success': new Toast('success', 'toast-top-right', 'you did it'),
  // 'mylatestpost-fail': new Toast('warning', 'toast-top-right', 'Failed to load your latest post')

}

const uploadToasts = {
  'createupload-pass': new Toast('success', 'toast-top-right', 'Uploaded Successfully!'),
  'createupload-fail': new Toast('warning', 'toast-top-right', 'Failed to upload!')
}

const messageToasts = {
  'message-pass': new Toast('warning', 'toast-top-left', 'First, select an audio file.  Then, add a title and notes!')
}

// showToast is called with the auth/ui and post/post-ui modules
// an example of action would be 'signup-pass',
// an example of event would be 'ui'
function showToast (action, event) {
  // configure all toastr timeouts and position
  toastr.options.positionClass = 'toast-top-full-width'
  toastr.options.extendedTimeOut = 0
  // total duration of the message in milliseconds
  toastr.options.timeOut = 1000
  // fade out time
  toastr.options.fadeOut = 250
  // fade in time
  toastr.options.fadeIn = 250

  // find and display correct Toaster based on event param
  // if event is truthy run this switch
  switch (event) {
    // if event is 'ui'
    case 'ui':
      // assign the Toast constructor instance to a variable
      const uiToast = uiToasts[action]
      // defines toastr notifcation position based on constuctor instance css
      toastr.options.positionClass = uiToast.css
      // calls toastr, which will display the message with the type and msg from the constructor instance
      toastr[uiToast.type](uiToast.msg)
      break
    // if event is log
    case 'log':
      const logToast = logToasts[action]
      toastr.options.positionClass = logToast.css
      toastr[logToast.type](logToast.msg)
      break
    // if event is upload
    case 'upload':
      const uploadToast = uploadToasts[action]
      toastr.options.positionClass = uploadToast.css
      toastr[uploadToast.type](uploadToast.msg)
      break
    // if event is message
    case 'message':
      const messageToast = messageToasts[action]
      toastr.options.positionClass = messageToast.css
      toastr.options.timeOut = 7500
      toastr[messageToast.type](messageToast.msg)
      break
  }
}

module.exports =
  showToast
