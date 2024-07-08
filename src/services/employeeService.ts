import { employeeData } from "../interface/employeeInterface";
import { Employee } from "../models/employeeSchema"

export const getAllEmployee = () => {
    try {
        const employees = Employee.find();
        return employees;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const getEmployeeById = (id: String) => {
    try {
        const employee = Employee.findById(id);
        return employee;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const updateEmployeeById = (id: String, data: employeeData) => {
    try {
        const result = Employee.findByIdAndUpdate(id, data);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const deleteEmployeeById = (id: String) => {
    try {
        const result = Employee.findByIdAndDelete(id);
        return result;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const saveEmployee = (data: employeeData) => {
    try {
        const employee = Employee.create(data);
        return employee;
    } catch (error: any) {
        console.log(error.message);
    }
}