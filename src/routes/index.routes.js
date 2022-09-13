const express = require("express");
const router = express.Router();
const fs = require("fs");
const spsave = require("spsave").spsave;

router.post("/save", async (req, res, next) => {
    const creds = {
        username: "rjcalderin3@misena.edu.co",
        password: "R1127572283Roman",
    };

    const fileOpts = {
        folder: "pacientes/PACIENTES",
        fileName: "filename.pdf",
        fileContent: fs.readFileSync("filename.pdf"),
    };

    const coreOpts = {
        siteUrl: `https://misenaeduco.sharepoint.com/sites/onecliclk`,
    };

    spsave(coreOpts, creds, fileOpts)
        .then(function (data) {
            console.log("File uploaded!");
        })
        .catch(function (err) {
            console.log("Error occurred");
        });
});

module.exports = router;
