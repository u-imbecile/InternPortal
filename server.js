const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

// Dummy user data
const userData = {
  name: "Satyajeet Kumar",
  referralCode: "satyajeet2025",
  donationsRaised: 12500,
  rewards: [
    "Bronze Badge",
    "Exclusive Swag Access",
    "Certificate of Participation"
  ]
};

// Dummy leaderboard
const leaderboard = [
  { name: "Aditi", donations: 18000 },
  { name: "Satyajeet Kumar", donations: 12500 },
  { name: "Raj", donations: 9000 }
];

// Route for user info
app.get('/api/user', (req, res) => {
  res.json(userData);
});

// Route for leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
