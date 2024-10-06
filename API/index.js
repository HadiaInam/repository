import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'
import postRoutes from './routes/post.route.js'
import commentRoutes from './routes/comment.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(
    process.env.MONGO
).then(
    () => {
        console.log("Mongo connected")
    }
).catch((err) => {
    console.log(err)
})
const app = express()
app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server running on port 3000!');
});

app.use('/API/user', userRoutes);
app.use('/API/auth', authRoutes);
app.use('/API/post', postRoutes);
app.use('/API/comment', commentRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });

});