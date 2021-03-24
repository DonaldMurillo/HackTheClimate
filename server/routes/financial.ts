import express, { Request, Response } from 'express';
import { Financial } from '../models/financial.model';

/** Route that will be added to the express */

const router = express.Router();
// const path: string = '/api/v1/example';

// Define functions
const getFinancial = () => {return "Got financial"}
const deleteFinancial = () => {return "Deleted financial"}
// const addFinancial = () => {return "Added financial"}
// const editFinancial = () => {return "Edited financial"}

// Define routes
router.get('/financial', async (req: Request, res: Response) => {
    const financial = getFinancial();
    return res.status(200).send(financial);
});

router.post('/financial', async (req: Request, res: Response) => {
    const financial: Financial = {...req.body};
    return res.status(201).send(financial);
});

router.patch('./financial', async(req: Request, res: Response) => {
    const financial: Financial = {...req.body};    
    return res.status(201).send(financial);
});

router.delete('./financial', async(req: Request, res: Response) => {
    const financial = deleteFinancial();
    return res.status(200).send(financial);
});

// Export the route
export { router as financialRouter }