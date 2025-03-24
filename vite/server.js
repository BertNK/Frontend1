import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Use CORS middleware
app.use(cors());

app.get('/api/comics', async (req, res) => {
  const apiUrl = `https://comicvine.gamespot.com/api/issues/?api_key=41bd83b2939bb124fcaa63e90c5d0e88b8c0e49a&format=json `;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from ComicVine:', error);
    res.status(500).send('Error fetching data from ComicVine');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
