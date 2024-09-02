const express = require('express');
const app = express();
const wishList = require('./wishList');
const invite = require('./invite');

app.use(express.json());

app.use('/api/wishlist', wishList);
app.use('/api/invite', invite);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

