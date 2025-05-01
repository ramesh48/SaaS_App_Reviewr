import express from "express";
import dotenv from "dotenv";
dotenv.config();
import fs from "fs";
const rawData = fs.readFileSync('sample.json', 'utf8');
export const GetCompany =async (req, res) => {
    try {
        const data = JSON.parse(rawData);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error reading data" });
    }
}
export const CompanyFilter = async (req, res) => {
    try {
        const { company_name, start_date, end_date, source } = req.body;

        const data = JSON.parse(rawData);

        const filteredCompany = data.filter((item) => {
            return item.company_name === company_name && item.Source === source;
        });

        if (filteredCompany.length === 0 || !filteredCompany[0].Reviews) {
            return res.status(404).json({ message: "No matching company or reviews found" });
        }

        const filteredData = filteredCompany[0].Reviews.filter((item) => {
            const itemDate = new Date(item.date);
            const startDate = new Date(start_date);
            const endDate = new Date(end_date);

            return itemDate >= startDate || itemDate <= endDate;
        });

        res.status(200).json(filteredData);
    } catch (error) {
        res.status(500).json({ message: "Error reading data" });
    }
};
