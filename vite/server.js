import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Use CORS middleware
app.use(cors());

app.get('/api/comics', async (req, res) => {
  const apiUrl = `https://comicvine.gamespot.com/api/issues/?api_key=41bd83b2939bb124fcaa63e90c5d0e88b8c0e49a&format=json&sort=cover_date:desc&limit=50`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data.results) {
      res.json({ results: response.data.results });
    } else {
      res.status(404).json({ message: "No comics found" });
    }
  } catch (error) {
    console.error("Error fetching comics:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}); 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
