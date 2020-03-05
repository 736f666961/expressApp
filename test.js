// Import express module
const express = require('express');

// Import fs (filesystem) module
const fs = require('fs');

// return express function
const app = express();

// Student Object
const student = {
    Name: "Sonia",
    Age: 22,
    City: "Bancock",
    Alive: true
};

// When user toutes to root
app.get('/', (req, res) => {
    // Convert object to json file
    let stu = JSON.stringify(student);

    // Write Student Object to Student Json File 
    fs.writeFileSync("student.json", stu);

    res.send("File student.json created !");
});

// When user routes to /student
app.get('/student', (req, res) => {
    // Read json file
    let read = fs.readFileSync("student.json", "utf8");

    // Back data to the client
    res.send(read);
});

// Listen on port 3000 
const port = 3000;
app.listen(port, () => console.log(`Listenin on port ${port}`));
