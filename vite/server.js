import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Use CORS middleware
app.use(cors());

app.get('/api/comics/:id', async (req, res) => {
  const comicId = req.params.id;
  const apiUrl = `https://comicvine.gamespot.com/api/issues/${comicId}/?api_key=YOUR_API_KEY&format=json`;

  try {
    const response = await axios.get(apiUrl);
    
    if (response.data.results) {
      res.json(response.data);
    } else {
      res.status(404).json({ message: "Comic not found" });
    }
  } catch (error) {
    console.error('Error fetching comic data:', error);
    res.status(500).send('Error fetching comic data');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
