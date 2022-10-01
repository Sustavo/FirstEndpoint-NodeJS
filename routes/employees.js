const express = require('express');
const Employee = require('../Models/employee');

const router = express.Router();

router.get('/', function(req, res) {
    Employee.find({}, function(err, foundEmployees){
        res.json(foundEmployees);
    }); 
});

router.get('/:id', function(req, res) {
	const employeeId = req.params.id;
	Employee.findById(employeeId, function(err, foundEmployee) {
        if (err) {
            res.status(422)
            .send(
                { errors: [{title: "Employee Error", detail: "could not find employee!"}]});
        };
		res.json(foundEmployee);
	});
});

module.exports = router;