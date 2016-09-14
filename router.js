var categorias = require('./controllers/categoria');

module.exports = function(express) {

    var router = express.Router();

    router.route('/')
        .get((req,res) => {
            res.end('Welcome to the coolest api');
        });

    router.route('/categorias')
        .get((req,res) => {
            categorias.GetAll((err, categorias) => {
                if(err)
                    res.json({error : err});

                res.json(categorias);
            });
        });

    return router;
}