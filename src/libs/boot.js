// Inicializa el servidor
module.exports = app => {
    // Crea la base de datos, tablas y columnas si no existen
    app.db.sequelize.sync().done(() => {
        // Levantamos el servidor hasta que sequelize termine
        app.listen(app.get('port'), () => {
            console.log(`Escuchando en el puerto ${app.get('port')}`)
        })
    });

}