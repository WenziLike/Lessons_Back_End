/**
 * GET -> получить обработать
 */

const http = require('http')
const url = require('url')
const {parse} = require('querystring')

http.createServer((request, response) => {
    console.log(`STARTED SERVER`)
    if (request.method === 'GET') {
        console.log(request.method)
        let urlRequest = url.parse(request.url, true)
        // console.log(urlRequest)
        console.log(urlRequest.query.test) // ! GET Params
        response.end('go go go')
    } else {
        /**
         * POST -> обработать
         */

        let body = ''
        request.on('data', chunk => {
            body += chunk.toString()
        })
        request.on('end', () => {
            console.log(body)
            let params = parse(body)
            console.log(params)
            console.log(params.hi)
            response.end('...ok')
        })
    }
}).listen(3000)
