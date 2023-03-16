const {
   logError,
   errorHandler,
   ormErrorHandler, 
} = require('../middlewares/errorhandler')

const errorHandlerRouter = (app)=>{
    app.use(logError);
    app.use(ormErrorHandler);
    app.use(errorHandler)

    app.use('*', (req,res)=>{
        return res
        .status(404)
        .send('No se ha encontrado la ruta')
    })
}


module.exports = errorHandlerRouter