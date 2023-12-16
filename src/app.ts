import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { dbConnect } from './utils/dbConnect';
import { catRoutes } from './app/modules/Cat/cat.route';


const app: Application = express();


// parsers
app.use(express.json());
app.use(cors());

// connections
dbConnect();

// application route
app.use('/api/v1/cats', catRoutes);

const getController = (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to the API of first project',
    })
}

app.get('/', getController);

export default app;