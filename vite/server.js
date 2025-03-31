import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

// Use CORS middleware
app.use(cors());

app.get('/api/comics', async (req, res) => {
  const apiUrl = `https://comicvine.gamespot.com/api/issues/?api_key=41bd83b2939bb124fcaa63e90c5d0e88b8c0e49a&format=json&limit=500`; // fetch a larger set of comics to work with

  try {
    const response = await axios.get(apiUrl);
    if (response.data.results) {
      const comicCounts = {};

      response.data.results.forEach((comic) => {
        const seriesName = comic.volume?.name || comic.name;
        if (seriesName) {
          comicCounts[seriesName] = (comicCounts[seriesName] || 0) + 1;
        }
      });

      const sortedComics = Object.entries(comicCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10);

      const topComics = sortedComics.map(([seriesName, count]) => ({
        name: seriesName,
        count: count,
      }));

      res.json({ results: topComics });
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
