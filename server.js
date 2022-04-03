/*
const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('', (req, res) => {
    res.send("HEllo World")
});

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
*/

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/dbConn');
const logVisit = require('./controllers/registerVisit');
const path = require('path');

const express = require('express');
const app = express();

app.use(express.static('public'))

app.get('', function (req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'public/index.html'));
})


//Opens HTML with button. When button is clicked the id in the URL and timestamp is logged. 
app.get('/heis', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/confirmSafety.html'));
})


//When this route is used, server tries to log id, timestamp in mongoDB
app.route('/registerVisit')
    .get((req, res) => {
        //If upload is successful route to /openHandyman
        try {
            console.log("New visit. Registering...")
            logVisit(req, res);
            res.redirect('/openHandyman');
        //IF something fails, go back to open HM button
        } catch(err){
            console.log("error");
            res.redirect('/heis');
        }
        
    })

//THis route always opens HM
app.route('/openHandyman')
    .get((req, res) => {
        try {
            res.redirect('handyman://open');
        } catch(err){
            console.log("error")
        }
    })

//connect to mongoDB
connectDB();

mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, () => console.log('Server running on port ' + PORT))
})
