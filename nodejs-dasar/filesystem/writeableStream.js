const fs = require('fs')
const path = require('path')

const pathFile = path.resolve(__dirname, 'output.txt')

const writeableStream = fs.createWriteStream(pathFile)

writeableStream.write('ini adalah teks yang dibuat secara asynchronus', 'utf-8', (err) => {
  if (err) throw err
  console.log('berhasil menulis ke file')
})
 writeableStream.end()