const remote = require('electron').remote
const data = remote.getCurrentWindow().rendererSideName

const content   = document.getElementById('content')
const options   = document.getElementById('options')

// Initialize page

function initialize() {
  keys = Object.keys(data.tools)
  nodes = options.childNodes
  for (i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType != 3) {
      buffer = nodes[i].textContent
      if (inArray(buffer, keys)) {
        nodes[i].innerHTML = data.tools[buffer].name
        nodes[i].addEventListener('click', function() {
          alert("Coucou")
        })
      }
    }
  }
}

// Check if element exist in array

function inArray(elem, array) {
  for (i = 0; i < array.length; i++) {
    if (elem == array[i]) {
      return true
    }
  }
  return null
}
