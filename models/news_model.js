const mongooes = require('mongoose');

const newsSchema = new mongooes.Schema({
    username: String,
    password: String,
    access : String
})

module.exports = mongooes.model('users', newsSchema);