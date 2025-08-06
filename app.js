const express = require('express');
 const dotenv = require('dotenv');
const user = require('./src/routes/user');
const admin = require('./src/routes/admin');
const product = require('./src/routes/product');
 dotenv.config()
const PORT = process.env.PORT || 3000
const cors = require('cors');
const auth = require('./src/routes/auth');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors())

app.use('/user', user)
app.use('/admin', admin)
app.use('/product', product)
app.use('/login', auth)

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
