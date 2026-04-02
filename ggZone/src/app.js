import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname)));
app.use("/pages", express.static(path.join(__dirname, "pages")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/data", express.static(path.join(__dirname, "data")));

app.get("/api/accounts", async (req, res) => {
  try {
    const { minPrice, maxPrice, search } = req.query;

    const filePath = path.join(__dirname, "data", "accounts.json");
    const raw = await fs.readFile(filePath, "utf-8");
    const accounts = JSON.parse(raw);

    const filtered = accounts.filter((account) => {
      const price = Number(account.price) || 0;
      const min = minPrice ? Number(minPrice) : null;
      const max = maxPrice ? Number(maxPrice) : null;
      const searchTerm = (search || "").toLowerCase().trim();

      const matchMin = min === null || price >= min;
      const matchMax = max === null || price <= max;
      const matchSearch =
        !searchTerm ||
        (account.title || "").toLowerCase().includes(searchTerm) ||
        (account.rank || "").toLowerCase().includes(searchTerm);

      return matchMin && matchMax && matchSearch;
    });

    res.json(filtered);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
