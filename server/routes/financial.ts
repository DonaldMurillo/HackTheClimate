import express, { Request, Response } from 'express';
import { Financial } from '../models/financial.model';

/** Route that will be added to the express */

// const app = express(); wtdiff
const router = express.Router();
const path: string = '/api/v1/example';

// Define functions
const getFinancial = () => {return "Got financials"}

// Define routes
router.get('/financials', async (req: Request, res: Response) => {
    const financials = getFinancial();
    return res.status(200).send(financials);
});

router.post('/financials', async (req: Request, res: Response) => {
    const financial: Financial = {...req.body};
    return res.status(201).send(financial);
});

router.patch('./financial', async(req: Request, res: Response) => {

})

router.delete('./financial', async(req: Request, res: Response) => {

})

// Export the route
export { router as financialRouter }