var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var categoriasSchema = new Schema({  
  id:    { type: Number },
  nombre:     { type: String },
  resource:  { type: Number },
  color:   { type: Number },
  forma:  { type: Number },
  tipo:    { type: Number},
  total:  { type: Number },
  es_cuenta:  { type: Number }
});

module.exports = mongoose.model('Categoria', categoriasSchema);  