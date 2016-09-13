var Categoria = require('../models/categoria');

exports.GetAllCategorias = (callback) => {
    Categoria.find((err,categorias) => {
        if(err) {
            callback(err)
        }else {
            callback(null, categorias);
        }
    });
};

exports.GetNote = (id, callback) => {
    Note.findById(id, (err, categoria) => {
        err ? callback(err) : callback(null, categoria);
    });
};

exports.CreateNote = (req, callback) => {

    var note = new Categoria();
    note.nombre = req.body.text;

    note.save((err) => {
        err ? callback(err) : callback(null);
    });
}