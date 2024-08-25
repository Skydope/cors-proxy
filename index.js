const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

// Middleware para permitir CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Ruta para manejar las solicitudes al proxy
app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL es requerida');
    }

    // Realizar la solicitud a la URL especificada
    request(url).pipe(res);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`CORS Proxy corriendo en http://localhost:${port}`);
});
