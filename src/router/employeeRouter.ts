import express from "express";
import { deleteEmployeeById, getAllEmployee, getEmployeeById, saveEmployee, updateEmployeeById } from "../services/employeeService";
import { employeeData } from "../interface/employeeInterface";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const employee = await getAllEmployee();
        return res.status(200).json({
            count: employee?.length,
            data: employee,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await getEmployeeById(id);
        return res.status(200).json(employee);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.user_id || !req.body.employee_id || !req.body.employee_number || !req.body.company_branch_id || !req.body.department_id || !req.body.job_title_id || !req.body.team_id || !req.body.data_entry || !req.body.resignation_date) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const { id } = req.params;
        const result = await updateEmployeeById(id, req.body);

        if (!result) {
            return res.status(400).send({ message: "Employee not found" });
        }
        return res.status(200).send({ message: "Employee update success"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteEmployeeById(id);

        if (!result) {
            return res.status(400).send({ message: "Employee not found" });
        }
        return res.status(200).send({ message: "Employee delete success" });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        if (!req.body.user_id || !req.body.employee_id || !req.body.employee_number || !req.body.company_branch_id || !req.body.department_id || !req.body.job_title_id || !req.body.team_id || !req.body.data_entry || !req.body.resignation_date) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const newEmployee: employeeData = {
            user_id: req.body.user_id,
            employee_id: req.body.employee_id,
            employee_number: req.body.employee_number,
            company_branch_id: req.body.company_branch_id,
            department_id: req.body.department_id,
            job_title_id: req.body.job_title_id,
            team_id: req.body.team_id,
            data_entry: req.body.data_entry,
            resignation_date: req.body.resignation_date,
        };
        const employee = await saveEmployee(newEmployee);
        return res.status(201).send(employee);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;