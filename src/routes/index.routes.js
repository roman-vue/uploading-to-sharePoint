const express = require("express");
const router = express.Router();
const fs = require("fs");
const spsave = require("spsave").spsave;

router.post("/save-document/:year/:mounth/:admition/:nameDocument/", async (req, res, next) => {
    let path = `${req.params.year}/${req.params.mounth}/${req.params.admition}`;
    let buff = fs.readFileSync("filename.pdf");

    const creds = {
        username: process.env.USER,
        password: process.env.PASS,
    };

    const fileOpts = {
        folder: `pacientes/${path}`,
        fileName: `${req.params.nameDocument}.pdf`,
        fileContent: buff,
    };

    const coreOpts = {
        siteUrl: process.env.SITEURL,
    };

    spsave(coreOpts, creds, fileOpts)
        .then(() => {
            res.status(200).json({ msg: `File Upload` });
        })
        .catch((err) => {
            console.log("Error occurred", err.message);
            res.status(403).json({ error: err.message });
        });
});

module.exports = router;
