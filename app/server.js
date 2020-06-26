const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express')
const ejs = require('ejs')

const app = express(), DIST_DIR = path.resolve(__dirname)

app.use(express.static(DIST_DIR))
app.set('view engine', 'ejs')
app.set('views', DIST_DIR+'/views')

app.use('/assets', express.static(__dirname + '/ressources/assets/'));
const mainroute = require('./routes/main')
app.use(mainroute)


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
