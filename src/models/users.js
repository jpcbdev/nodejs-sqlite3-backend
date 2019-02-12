module.exports = (sequelize, DataType) => {

    const userSchema = sequelize.define('users', {
        
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nickname: {
            type: DataType.STRING,
            allowNull: false,
        }
    });

    userSchema.associate = (models) => {
        userSchema.hasMany(models.messages)
    }
    return userSchema;
}