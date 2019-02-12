module.exports = (sequelize, DataType) => {

    const messageSchema = sequelize.define('messages', {

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: DataType.STRING,
            allowNull: false,
        }

    });

    messageSchema.associate = (models) => {
        messageSchema.belongsTo(models.users);
    }

    return messageSchema;
}