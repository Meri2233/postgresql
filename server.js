import express from 'express';
import morgan from 'morgan';
const app = express();
import dbPool from "./dbConfig.js";
import { nanoid } from 'nanoid';

app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    res.render('index');
})

app.post('/shortit', (req, res) => {
    const originalURL = req.body.url;
    const newURL = "http://localhost:7300" + nanoid(8); 
    const dbResult = dbPool.query("SELECT * FROM urls")

    res.render('new', { urls: { originalURL: originalURL, newURL: newURL } });//"This is the url:" + originalURL + "This is the short url" + newURL);
})

process.on('close', async () => {
    await dbPool.end();
})
app.listen(process.env.PORT || 7300)      