const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const db = require('./utils/database')
const initModels = require('./models/initmodels')
const usersroutes = require('./routes/user.routes')
const authoroutes = require('./routes/auth.routes')
const conversationRoutes = require('./routes/conversation.routes')
const messageRoutes = require('./routes/message.routes')
const errorHandlerroutes = require('./routes/errorhander.routes')
const PORT = 5000



const app = express()
initModels()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())



db.authenticate()
    .then(() => {
        console.log('conectada la bse de datos')
    })
    .catch((error) => console.log(error))
db.sync({ alter: true })
    .then(() => console.log('DB syncronizada'))
    .catch(error=> console.log(error))


app.use(usersroutes)
app.use(authoroutes)
app.use(conversationRoutes)
app.use(messageRoutes)

app.get('/', (req,res)=>{
    res.send('bienvenido al servidor')
})

errorHandlerroutes(app)

app.listen(PORT,()=>{
    console.log(`Escuchando por el puero : ${PORT}`)
})