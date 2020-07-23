const employeeService = require('../services/EmployeeService');

exports.get = async (req, res) => {
     const employees = await employeeService.getEmployees();
     res.json(employees);
};

exports.create = async (req, res, next) => {
     const employee = await employeeService.createEmployee(req.body);
     res.json(employee);
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
