const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importamos el modelo de puntajes que creamos en el archivo Score.js
const Score = require('./Score');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/dinoGame')
  .then(() => console.log("¡Conectado exitosamente a MongoDB!"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.send("¡El backend de Dino Apocalipsis está funcionando!");
});

// 1. Endpoint para GUARDAR un puntaje (POST)
app.post('/api/scores', async (req, res) => {
    try {
        const { username, score } = req.body;
        
        const newScore = new Score({ username, score });
        await newScore.save();

        res.status(201).json({ message: "¡Puntaje guardado con éxito!" });
    } catch (error) {
        res.status(500).json({ error: "Error al guardar el puntaje" });
    }
});