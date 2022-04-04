const mongoose = require('mongoose');
var constants1 = require('./constants')

var employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: 'This field is required.'
    },
    city: {
        type: String,
        required: 'This field is required.'
    },
    age: {
        type: Number,
        required: 'This field is required.'
    },
    salary: {
        type: Number,
        required: 'This field is required.'
    }
});

// Custom validation for email
employeeSchema.path('fullName').validate((val) => {
    return constants1.Constants.$FullNameRegEx.test(val);
}, 'Invalid full name.');

employeeSchema.path('email').validate((val) => {
    return constants1.Constants.$EmailIdRegEx.test(val);
}, 'Invalid e-mail.');

employeeSchema.path('mobile').validate((val) => {
    return constants1.Constants.$ConNoRegEx.test(val);
}, 'Invalid mobile.');

employeeSchema.path('city').validate((val) => {
    return constants1.Constants.$FullNameRegEx.test(val);
}, 'Invalid cityname.');

employeeSchema.path('age').validate((val) => {
    return constants1.Constants.$AgeRegEx.test(val);
}, 'Invalid age');

employeeSchema.path('salary').validate((val) => {
    return constants1.Constants.$AgeRegEx.test(val);
}, 'Invalid salary');

mongoose.model('Employee', employeeSchema);