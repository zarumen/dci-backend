const fs = require('fs')

fs.readFile(
  './dist/file.txt', (error, buffer) => {
    if (error) {
      return console.log(error)
    }

    console.log(`read file from file.txt \n ${buffer}`)

    const array = JSON.parse(buffer.toString());
  }
)