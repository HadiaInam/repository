import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(
    process.env.MONGO
).then(
    () => {
        console.log("Mongo connected")
    }
)
const app = express()
app.use(express.json())

app.listen(3000, () => {
    console.log('Server running on port 3000!');
});

app.use('/API/user', userRoutes);
app.use('/API/auth', authRoutes);