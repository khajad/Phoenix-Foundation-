const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;
const API_KEY = '7a4be8cf-673d-4e78-9071-705544c672c2';

app.use(cors());

app.get('/api/search-projects', async (req, res) => {
  const theme = req.query.theme || 'edu'; // Default theme is 'education'
  const url = `https://api.globalgiving.org/api/public/projectservice/themes/${theme}/projects/active?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url, { headers: { Accept: 'application/json' } });
    const projects = response.data.projects?.project || [];
    res.json(projects);
  } catch (error) {
    console.error('Backend API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch projects from GlobalGiving' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});