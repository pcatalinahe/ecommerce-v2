import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
import cors from "cors";
import mysql from "mysql2/promise";
import pool from "./database/connectionPool.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, "../../dist/index.html");

app.use(express.static(path.resolve(__dirname, "../../dist")));
app.use(cors());

//draws our index.html file on localhost:3000
app.get("/", (req, res) => {
  res.sendFile(htmlPath);
});

app.get("/api/products", async (req, res) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.query("SELECT * FROM ProductsDB.Products");
  res.json(rows);
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
