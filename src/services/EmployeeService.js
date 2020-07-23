const employeeRepository = require('../repositories/EmployeeRepository');
const Employee = require('../entities/Employee');

exports.createEmployee = async ({
     name,
     department,
     gender,
     address,
     phone,
}) => {
     return employeeRepository.createEmployee({
          name,
          department,
          gender,
          address,
          phone,
     });
};

exports.getEmployees = async () => {
     return employeeRepository.getAllEmployees();
};

exports.getSpecificEmployee = async (employeeId) => {
     return employeeRepository.getEmployee(employeeId);
};

exports.updateEmployee = async (
     employeeId,
     { name, department, gender, address, phone }
) => {
     return employeeRepository.updateEmployee(employeeId, {
          name,
          department,
          gender,
          address,
          phone,
     });
};
exports.deleteEmployee = async (employeeId) => {
     return employeeRepository.deleteEmployee(employeeId);
};
