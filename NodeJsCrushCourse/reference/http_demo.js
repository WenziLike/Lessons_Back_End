const http = require('http')

// Create server object
http
    .createServer((req, res) => {
        // Write response
        res.write('Hello Server')
        res.end()
    })
    .listen(6868, () => console.log('Server running...'))