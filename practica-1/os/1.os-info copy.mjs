import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema operativo:', platform())
console.log('Version del sistema operativo:', release())
console.log('Arquitectura del sistema operativo:', arch())
console.log('----------------------------------')
console.log('CPUs de la maquina:', cpus()) // <-- Vamos a poder escalar procesos en Node.js
console.log('----------------------------------')
console.log('Memoria total:')
console.log('Memoria libre:', freemem() / 1024 / 1024)
console.log('Memoria total:', totalmem() / 1024 / 1024)
console.log('----------------------------------')
console.log('Tiempo de ordenador encendido:')
console.log('Uptime del ordenador:', uptime() / 60 / 60)
