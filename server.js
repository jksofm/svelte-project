import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import fs from "fs";
import { handler } from "./my-app/build/handler.js";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import multer from 'multer';

// Create a storage object for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Specify the destination for uploaded files
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir); // Create the uploads directory if it doesn't exist
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Set the filename for the uploaded file
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid duplicate filenames
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage });

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

// Path to your JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Load existing data from JSON file
let jsonData = {};
if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    jsonData = JSON.parse(rawData);
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// API endpoint to get data
app.get('/api/data', (req, res) => {
    res.json(jsonData);
});

// API endpoint to update data
app.post('/api/data', (req, res) => {
    jsonData = req.body;
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});

// API endpoint to update headerUserData
app.post('/api/data', (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, ...req.body.data };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});
// upload info data
app.post('/api/data/info', (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    jsonData = { ...jsonData, infoData : {...jsonData.infoData ,...req.body.data} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});
// upload home/hero section
app.post('/api/data/hero', (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send('Invalid data.');
    }

    // Update headerUserData
    jsonData = { ...jsonData, heroData : {...jsonData.heroData ,...req.body.data} };
    fs.writeFileSync(dataFilePath, JSON.stringify(jsonData, null, 2));
    res.status(200).send('Data saved successfully.');
});

// API endpoint for image upload
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    
        // const oldImageName = req.body.oldImageName;
        // const oldImagePath = path.join(__dirname, 'uploads', oldImageName);
    
        // if (oldImageName) {
        //     fs.unlink(oldImagePath, (err) => {
        //         if (err) {
        //             console.error('Error deleting old image:', err);
                
        //         } else {
        //             console.log('Old image deleted successfully.');
        //         }
        //     });
        // }
        const fullPath = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    res.status(200).json({
        message: 'File uploaded successfully.',
        filePath: fullPath 
    });
});

app.use(handler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
