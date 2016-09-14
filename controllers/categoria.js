var Categoria = require('../models/categoria');

exports.GetAll = (callback) => {
    Categoria.find((err,categorias) => {
        err ? callback(err) : callback(null, categorias);
    });
};

exports.Get = (id, callback) => {
    Note.findById(id, (err, categoria) => {
        err ? callback(err) : callback(null, categoria);
    });
};

exports.Create = (req, callback) => {

    var note = new Categoria();
    note.nombre = req.body.text;


    note.save((err) => {
        err ? callback(err) : callback(null);
    });
}