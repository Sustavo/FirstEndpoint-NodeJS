const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/Dev');
const Employee = require('./Models/employee');
const FakeDb = require('./database/fake-db');
const employeeRoutes = require('./routes/employees')

mongoose.connect(config.DB_URI, {useNewUrlParser: true}).then(() => {

    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();


app.get('/users', function(req,res) {
    res.json({"success": true});
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log(`Node Js Server is Running on http://localhost:${PORT}`);
})

app.use("/api/v1/employees/", employeeRoutes);