const employeeService = require('../services/EmployeeService');
const _ = require('lodash');

exports.get = async (req, res) => {
     const employees = await employeeService.getEmployees();
     res.json(employees);
};

exports.create = async (req, res, next) => {
     const employee = await employeeService.createEmployee(req.body);
     res.json(employee);
};

exports.getSpecific = async (req, res, next) => {
     const employee = await employeeService.getSpecificEmployee(
          req.params.employeeId
     );
     if (_.isNull(employee)) {
          next(new Error('Invalid credentials'));
     } else {
          res.json(employee);
     }
};
exports.update = async (req, res, next) => {
     const employee = await employeeService.updateEmployee(
          req.params.employeeId,
          req.body
     );
     if (_.isNull(employee)) {
          next(new Error('Invalid credential'));
     } else {
          res.json(employee);
     }
};

exports.delete = async (req, res, next) => {
     const deleteEmployee = await employeeService.deleteEmployee(
          req.params.employeeId
     );
     res.json(deleteEmployee);
};

// exports.get = async (req, res) => {
//   res.json([
//     {
//       name: "John Doe",
//       gender: "male",
//       address: "Address 1",
//       phone: "99989898",
//       department: "IT-Department",
//     },
//     {
//       name: "Steve Johnson",
//       gender: "male",
//       address: "Address 1",
//       phone: "73456778546",
//       department: "HR",
//     },
//   ]);
// };

// exports.create = async (req, res, next) => {
//   console.log(req.body);

//   res.json(req.body);
// };
