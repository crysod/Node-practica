const os = require('node:os')

console.log("Informacion del sistema operativo:");
console.log("----------------------------------");
console.log("Nombre del sistema operativo:", os.platform());
console.log("Version del sistema operativo:", os.release());
console.log("Arquitectura del sistema operativo:", os.arch());
console.log("----------------------------------");
console.log("CPUs de la maquina:", os.cpus()); // <-- Vamos a poder escalar procesos en Node.js
console.log("----------------------------------");
console.log("Memoria total:");
console.log("Memoria libre:", os.freemem() / 1024 / 1024);
console.log("Memoria total:", os.totalmem() / 1024 / 1024);
console.log("----------------------------------");
console.log("Tiempo de ordenador encendido:");
console.log("Uptime del ordenador:", os.uptime() / 60 / 60);
