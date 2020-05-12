const express = require('express')
const fs      = require('fs')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('It works'))
app.get('/count/:fileName',async (req, res) => {
    let fileName = './'+req.params.fileName
    console.log(fileName)
    if(!fs.existsSync(fileName)) {
        fs.writeFileSync(fileName, 0)
    }
    let count = fs.readFileSync(fileName)
    count = count != '' ? parseInt(count)+1 : 1
    fs.writeFileSync(fileName, count)
    res.send(fileName+':'+count)
})

app.listen(port, () => console.log(`use get request like this: http://10.166.0.100:${port}/count/{someName}`))