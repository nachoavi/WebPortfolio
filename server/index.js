require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Basic API route to verify connection
app.get("/api/projects", async (req, res) => {
  try {
    // Mock response for the portfolio
    res.json([
      {
        id: 1,
        title: "Plataforma E-commerce",
        description: "Una tienda en línea robusta construida con React y Node.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        technologies: ["React", "Node.js", "MySQL"],
      },
      {
        id: 2,
        title: "API de Gestor de Tareas",
        description:
          "API RESTful para la gestión de tareas con sistema de autenticación seguro.",
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        technologies: ["Express", "MySQL", "JWT"],
      },
      {
        id: 3,
        title: "Chat en Tiempo Real",
        description:
          "Aplicación de mensajería instantánea impulsada por Socket.io con diseño minimalista.",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        technologies: ["React", "Socket.io"],
      },
    ]);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
