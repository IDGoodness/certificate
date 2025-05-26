import express from "express";
import { readFileSync, writeFileSync } from "fs";
import path, { join } from "path";
import cors from "cors";
import pkg from "body-parser";
// import path from "path";


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// For any route not handled by your API, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const { json } = pkg;
// import { json } from "body-parser";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(json());

const __dirname = path.resolve();
const EMAILS_FILE = join(__dirname, "allowedEmails.json");

// Get all allowed emails
app.get("/api/allowed-emails", (req, res) => {
    const emails = JSON.parse(readFileSync(EMAILS_FILE, "utf-8"));
    res.json(emails);
});

// Add a new email
app.post("/api/add-email", (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    let emails = JSON.parse(readFileSync(EMAILS_FILE, "utf-8"));
    if (!emails.includes(email)) {
        emails.push(email);
        writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
        return res.json({ success: true, emails });
    } else {
        return res.status(409).json({ error: "Email already exists" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});