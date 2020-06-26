const fs = require('fs');
const storyWords = require('./storyWords');
function writeStory(response) {
  fs.writeFileSync('index.html', storyWords(response), function (err) {
    if (err) { console.log(err.message) }
    else { console.log("Story Saved") }
  })
}
module.exports = writeStory;