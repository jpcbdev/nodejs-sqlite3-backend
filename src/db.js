import Sequelize from 'sequelize';
import fs from 'fs';
import path, {
    dirname
} from 'path';

let db = null;

module.exports = app => {

    const config = app.dbConfig;

    if (!db) {
        const sequelize = new Sequelize(config.dababase, config.username, config.password, config.params);

        db = {
            sequelize,
            Sequelize,
            models: {}
        }

        const dir = path.join(__dirname, 'models');
        fs.readdirSync(dir).forEach(fileName => {
            const modelDir = path.join(dir, fileName);
            const model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });

        // Recorremos y usamos el medoto asociate para crear relaciones
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
        // console.log(db.models);

        return db;

    }
}