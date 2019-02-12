module.exports = {
    database: 'chat',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        host: 'localhost',
        storage: 'chat-db.sqlite',
        define: {
            underscore: true
        },
        freezeTableName: true,
        operatorsAliases: false
    }

}