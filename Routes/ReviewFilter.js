import express from "express";
import {GetCompany, CompanyFilter} from "../Controller/Filter.js";
const router = express.Router();
router.get("/company", GetCompany);
router.post("/company/filter", CompanyFilter);
export default router;
