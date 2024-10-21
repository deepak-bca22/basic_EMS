import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";

const app = express();
app.use(cors()); // Call the cors function
app.use(express.json());

app.use('/auth', adminRouter);


const PORT = process.env.PORT || 4001; // Change to 4001 or another unused port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
