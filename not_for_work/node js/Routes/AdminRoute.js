import express from "express";

const router = express.Router();

router.post('/adminlogin', (req, res) => {
    console.log(req.body);

    // Example response; adjust as needed for your application
    const { email, password } = req.body;

    if (email && password) {
        // Here you would typically validate credentials against your database
        res.status(200).json({ message: "Login successful", email });
    } else {
        res.status(400).json({ message: "Email and password are required" });
    }
});

export { router as adminRouter };
