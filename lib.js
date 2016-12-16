var fs = require('fs')
module.exports = function() {
  setTimeout(function() { 
    fs.writeFile('test_file', 'hello world', function(){})
    console.log('hello finished')
  }, 1000)
  console.log('hello begin')
}
