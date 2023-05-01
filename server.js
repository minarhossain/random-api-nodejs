const http = require('http');
const fs = require('fs');

const port = 3000;




const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const home = fs.readFileSync('home.html', 'utf8');
        res.end(home)

    } else if (req.url === '/about') {
        const about = fs.readFileSync('about.html', 'utf8');
        res.end(about);

    } else if (req.url === '/contact') {
        const contact = fs.readFileSync('contact.html', 'utf8');
        res.end(contact)

    }
    else if (req.url === '/terms') {
        const terms = fs.readFileSync('terms.html', 'utf8');
        res.end(terms)

    } else {
        const notFound = fs.readFileSync('notFound.html', 'utf8');
        res.end(notFound);
    }

});
server.listen(port, () => {
    console.log(`Server is Running http://localhost:${port}`);
});