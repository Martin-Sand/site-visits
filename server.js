const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send("HEllo World")
});

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});

