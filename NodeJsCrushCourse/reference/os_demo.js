const os = require('os')

// Platform
console.log('======== Platform ========')
console.log(os.platform())
// CPU Arch
console.log('======== CPU Arch ========')
console.log(os.arch())
// CPU Core Info
console.log('======== CPU Core Info ========')
console.log(os.cpus())
// Free memory
console.log('======== Free memory ========')
console.log(os.freemem())
// Total memory
console.log('======== Total memory ========')
console.log(os.totalmem())
// Home dir
console.log('======== Home dir ========')
console.log(os.homedir())
// Uptime
console.log('======== Uptime ========')
console.log(os.uptime())



