import express from "express";
import { deleteUserAccountById, getAllUserAccounts, getUserAccountById, saveUserAccount, updateUserAccountById } from "../services/userAccountCrudService";
import { userAccountData } from "../interface/userAccountInterface";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const userAccounts = await getAllUserAccounts();
        return res.status(200).json({
            count: userAccounts?.length,
            data: userAccounts,
        });
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const userAccount = await getUserAccountById(id);
        return res.status(200).json(userAccount);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.user_id || !req.body.sss_number || !req.body.pagibig_number || !req.body.tin_number || !req.body.philhealth_number || !req.body.bank_account) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const { id } = req.params;
        const result = await updateUserAccountById(id, req.body);

        if (!result) {
            return res.status(400).send({ message: "User Account not found" });
        }
        return res.status(200).send({ message: "User Account update success"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteUserAccountById(id);

        if (!result) {
            return res.status(400).send({ message: "User Account not found"});
        }
        return res.status(200).send({ message: "User Account delete success"});
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        if (!req.body.user_id || !req.body.sss_number || !req.body.pagibig_number || !req.body.tin_number || !req.body.philhealth_number || !req.body.bank_account) {
            return res.status(400).send({
                message: "Please fill up all required"
            });
        }
        const newUserAccount: userAccountData = {
            user_id: req.body.user_id,
            sss_number: req.body.sss_number,
            pagibig_number: req.body.pagibig_number,
            tin_number: req.body.tin_number,
            philheatlh_number: req.body.philhealth_number,
            bank_account: req.body.bank_account
        }
        const userAccount = await saveUserAccount(newUserAccount);
        return res.status(201).send(userAccount);
    } catch (error: any) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;