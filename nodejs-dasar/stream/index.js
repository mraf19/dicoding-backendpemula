/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs')
const path = require('path')

const pathFile = path.resolve(__dirname, 'input.txt')

// readable stream
const readableStream = fs.createReadStream(pathFile, {
  highWaterMark: 15
})

const pathFile2 = path.resolve(__dirname, 'output.txt')

const writeableStream = fs.createWriteStream(pathFile2)

readableStream.on('readable', () => {
  try {
    writeableStream.write(`${readableStream.read()}\n`)
  } catch (err) {
    throw new Error(err)
  }
})

readableStream.on('end', () => {
  writeableStream.end('Done')
})

