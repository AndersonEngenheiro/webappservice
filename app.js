const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')



app.use(cors())
app.use(express.json())

/*Passe o nome do diretório que contém os ativos estáticos 
para a função de middleware express.static para iniciar a 
entregar os arquivos diretamente. Por exemplo, use o código 
a seguir para entregar imagens, arquivos CSS, e arquivos JavaScript 
em um diretório chamado public:*/
// permite utilizar arquivos estáticos na pasta view
app.use(express.static(__dirname + '/views'))


function readFile(res, file){
    fs.readFile(file, function(err, html){
        res.write(html)
        res.end()
    })
}

let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log('servidor iniciado em http://%s:%s', host, port)
})


module.exports = app

