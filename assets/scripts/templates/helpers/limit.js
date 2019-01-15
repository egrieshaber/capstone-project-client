// limits the number of character to thew length assigned within the handlebars template

const limit = (str, length) => {
  if (str.length <= length) {
    // if the data is less than our limiting length
    // return the data
    return str
  } else {
    // otherwise restrict the length to our limit size
    return str.substring(0, length)
  }
}

module.exports = limit
