const mongoose = require('mongoose');

const password = 'ulisesafcdev';
const dbname = 'contactos';
const uri = `mongodb+srv://ulisesafcdev:${password}@cluster0.bir9m.mongodb.net/${dbname}?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});