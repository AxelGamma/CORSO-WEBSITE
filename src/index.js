import express from 'express'
import { PORT } from '../config/config.js'
import router from './routes/routes.js'

import { fileURLToPath } from 'url'
import path from 'path'

const app = express();

// OBTENEMOS LA RUTA DEL ARCHIVO
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware para analizar cuerpos en formato URL-encoded
app.use(express.urlencoded({ extended: true }));

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')))
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/')))

app.use('/', router);

app.listen(PORT, () => {
   console.log( `Server is running http://localhost:${PORT}`); 
})