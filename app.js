import express from 'express';
import path from 'path';

import dotenv from 'dotenv';
import indexRoutes from './routes/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));

app.use('/', indexRoutes);

app.use((_, res) => res.status(404).render('pages/home', {
    title: 'Page non trouvée', users: [], error: '404 – Ressource introuvable'
}));

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});