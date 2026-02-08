import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/MongoDB';
import { userRouter } from './routes/UserRoutes';
import { errorHandler } from '@quickbiteapp/shared';
import { authRouter } from './routes/AuthRoutes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use(errorHandler);

const port = process.env.PORT;

const start = async () => {
    const dbConnectionString = process.env.MONGO_URI;

    if (!dbConnectionString) {
        console.log("MONGO_URI is not defined in the environment.");
        return;
    }

    try {
        await connectDB(dbConnectionString);
        console.log("Connected to Mongo Database");
        
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();