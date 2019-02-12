import morgan from 'morgan'
import bodyParser from 'body-parser';

module.exports = app => {
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.set('port', process.env.PORT || 3000);
}

// installar y usar body parser