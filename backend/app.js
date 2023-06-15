const express = require('express');

const app = express();




app.use((req, res) => {
    res.json({ message: 'Hello World !' });
}
)

app.listen(3000, () => console.log('server running on port 3000 '));