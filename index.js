const express = require('express')
const app = express()
app.listen('3000')
//middleware (express() vai usar o express.json()) 
// TUDO QUE ENTRA VAI PASSAR PELO MIDDLEWARE E VAI SER TRANSFORMADO EM JSON
app.use(express.json())

// ROTA DELETE
// app.route('/:identificador').delete( (require, response) => {
//   response.send(require.params.identificador)
// })


// ROTA PUT
// let author = "Adauto"
// app.route('/').get((require, response) => response.send(author))
// app.route('/').put((require, response) => {
//   author = require.body.author
//   response.send(author)
// })


//ROTA POST
// app.route('/').post((require, response) => response.send(require.body))


//ROTA GET
// app.route('/').get((require, response) => response.send("Hello"))
// app.route('/sobre').get((require,response) => response.send("Hello na página Sobre"))


