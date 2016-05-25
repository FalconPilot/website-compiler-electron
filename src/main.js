const remote = require('electron').remote
const data = remote.getCurrentWindow().rendererSideName

const content   = document.getElementById('content')
const options   = document.getElementById('options')

// Initialize page

function initialize() {
  keys = Object.keys(data.tools)
  nodes = options.childNodes
  console.log(nodes.length)
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType != 3) {
      buffer = nodes[i].id
      if (inArray(buffer, keys)) {
        nodes[i].innerHTML = data.tools[buffer].name
        nodes[i].addEventListener('click', function() {
          console.log(data.tools[this.id].func)
        })
      }
    }
  }
}

// Check if element exist in array

function inArray(elem, array) {
  for (a = 0; a < array.length; a++) {
    if (elem == array[a]) {
      return true
    }
  }
  return null
}
