const { clear } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const spr = require("sp-request");
const spsave = require("spsave").spsave;

router.get("/sp", async (req, res, next) => {
    // const filename = "filename.docx";
    // const file = fs.readFile(filename, (err, data) => {
    //     if (err) {
    //         console.log("err :>> ", err);
    //     } else {
    //         console.log("data :>> ", data);
    //     }
    // });
    const a = spr.create({ username: "rjcalderin3@misena.edu.co", password: "R1127572283Roman", online: true });
    const spget = await a
        .get(
            "https://misenaeduco.sharepoint.com/sites/onecliclk/_api/Web/GetFolderByServerRelativePath(decodedurl='/sites/onecliclk/pacientes/PACIENTES')/Files"
        )
        .then((resp) => {
            console.log("resp :>> ", resp.body.d);
        })
        .catch((err) => {
            console.log("err :>> ", err);
        });
    next();
});

router.post("/save", async (req, res, next) => {
    const coreOptions = {
        siteUrl: "https://misenaeduco.sharepoint.com/sites/onecliclk",
        checkin: true,
        checkinType: 1,
    };

    const creds = {
        username: "rjcalderin3@misena.edu.co",
        password: "R1127572283Roman",
    };

    const fileOptions = {
        folder: "SiteAssets",
        fileName: "file.txt",
        fileContent: "hello world",
    };

    const sp = await spsave(coreOptions, creds, fileOptions)
        .then((ele) => {
            log.info("ele:", ele);
        })
        .catch((err) => {
            console.log("err :>> ", err);
        });
    next();
});

module.exports = router;
