import http from "node:http"

const server = http.createServer((req, res) => {
      res.end("Sucesso!")
})

server.listen(3333)

