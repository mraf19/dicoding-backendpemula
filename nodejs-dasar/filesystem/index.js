// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs')
const path = require('path')

const pathFile = path.resolve(__dirname, 'notes.txt')

const file = fs.readFile( pathFile, 'utf-8', (err, data) => {
  if (err) throw console.log('gagal membaca file', err)
  console.log(data)
})

