const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const _CONST = require('./app/config/constant');
const morgan = require('morgan');
require ('dotenv').config();
const DB_MONGO = require('./app/config/db.config');

const PORT = _CONST.PORT;

var corsOptions = {
    origin: "https://student-info-management-git-back-end-lov3five.vercel.app/"
}

// Theo dõi log GET, POST, PUT,...
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Cross domain
app.use(cors(corsOptions));

// Connect to MongoDB
DB_MONGO.connect();

app.use(express.static("public", {
    'extension': '[jsx]'
}));
/* app.set('view engine', 'ejs') */

app.get('/', (req, res) => {
    res.send('Welcome to Naker UI ^^');
});

// Router hh
const userRouter = require('./app/routes/user');
const authRouter = require('./app/routes/auth');

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/.`);
});