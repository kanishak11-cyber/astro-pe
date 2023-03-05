const express = require('express');
const app = express();

app.use(express.json()); // Use JSON as the request body format

app.post('/pay', (req, res) => {
  const { name, email, amount, cryptoAddress } = req.body;

  // Check that all required fields are present
  if (!name || !email || !amount || !cryptoAddress) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Perform payment processing logic here
  // ...
   

  // Return a success response
  res.json({ success: true });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
