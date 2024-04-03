FROM node:14-alpine
WORKDIR /usr/src/app
COPY program.html task.js object.css ./
EXPOSE 3000
CMD ["node", "-e", "const http = require('http'), fs = require('fs'); const server = http.createServer((req, res) => { if (req.url === '/') { res.writeHead(200, {'Content-Type': 'text/html'}); fs.createReadStream('program.html').pipe(res); } else if (req.url === '/task.js') { res.writeHead(200, {'Content-Type': 'text/javascript'}); fs.createReadStream('task.js').pipe(res); } else { res.writeHead(404); res.end(); } }); server.listen(3000); console.log('Server running on port 3000');"]

