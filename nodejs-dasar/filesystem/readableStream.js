const fs = require('fs')
const path = require('path')

const pathFile = path.resolve(__dirname, 'notes.txt')

const readableStream = fs.createReadStream(pathFile, {
  highWaterMark: 100
})

readableStream.on('open', () => {
  console.log('File opened')
})

readableStream.on('readable', () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`)
  } catch (err) {
    throw new Error(err)
  }
})

readableStream.on('end', () => {
  console.log('Done')
})