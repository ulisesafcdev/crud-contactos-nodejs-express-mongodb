const express = require('express')
const app = express();
const routes = require('./routes/index.routes');
const path = require('path');

app.use(routes);
app.listen(3000, () => {
    console.log('Servidor a la espera de conexiones...');
});

app.use(express.static(path.join(__dirname, '../public')));
app.use((req,res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));