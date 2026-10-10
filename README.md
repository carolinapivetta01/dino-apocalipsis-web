
# 🦖 Dino Apocalipsis — Top-Down Shooter 2D

![Unity 2D](https://img.shields.io/badge/Unity-2D-blue?style=for-the-badge&logo=unity)
![C#](https://img.shields.io/badge/Language-C%23-green?style=for-the-badge&logo=csharp)
![Platform](https://img.shields.io/badge/Platform-PC%20%2F%20Windows-lightgrey?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development%20(Sprint%201)-orange?style=for-the-badge)

**Dino Apocalipsis** es un videojuego de acción y supervivencia en vista *Top-Down 2D* desarrollado en el motor Unity. En este título, la jugadora controla a **Amanda Rickwood**, una sobreviviente que debe enfrentarse a hordas de dinosaurios en un entorno postapocalíptico.

---

## 🎮 Mecánicas de Juego

* **Control de Personaje:** Movimiento omnidireccional en el plano 2D con velocidad normal y mecánica de *Sprint* mediante la tecla `LeftShift`.
* **Sistema de Disparo:** Instanciación de proyectiles alineados con la dirección y la orientación actual del personaje (tecla `F`).
* **Enemigos:** Dinosaurios con comportamiento de persecución y escalado de dificultad por tiempo (modo salvaje / temporizador).
* **Física y Colisiones 2D:** Detección de colisiones e impactos mediante la API de física 2D de Unity (`Rigidbody2D` y `Collider2D`).

---

## 🛠️ Tecnologías y Herramientas

* **Motor de Desarrollo:** Unity 2D (Versión compatible con Input Manager / Input System).
* **Lenguaje de Programación:** C#.
* **IDE:** Visual Studio Community.
* **Control de Versiones:** Git / GitHub.

---

## 📁 Estructura del Proyecto

```text
DinoApocalipsis/
├── Assets/
│   ├── Prefabs/          # Prefabs reutilizables (Balas, Dinosaurios, etc.)
│   ├── Scenes/           # Escenas principales del juego
│   ├── Scripts/          # Scripts en C# (PlayerController, Velociraptor, Bullet, etc.)
│   └── Sprites/          # Assets gráficos 2D y animaciones
├── Packages/             # Dependencias y paquetes del proyecto
└── ProjectSettings/      # Configuración de físicas, tags e inputs de Unity
