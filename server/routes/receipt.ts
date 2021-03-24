import express, { Request, Response} from 'express';
import { Receipt } from '../models/receipt.model';

/** Route that will be added to the express */

const router = express.Router();
// const path: string = '/api/v1/example';

// Define functions
const getReceipt = () => {return "Got a receipt"}
const deleteReceipt = () => {return "Deleted a receipt"}
// const addReceipt = () => {return "Added a receipt"}
// const editReceipt = () => {return "Edited a receipt"}

// Define routes
router.get('/receipt', async(req: Request, res: Response) => {
    const receipt = getReceipt();
    return res.status(200).send(receipt);
});

router.post('/receipt', async(req: Request, res: Response) => {
    const receipt: Receipt = {...req.body};
    return res.status(201).send(receipt);
});

router.patch('/receipt', async(req: Request, res: Response) => {
    const receipt: Receipt = {...req.body};
    return res.status(201).send(receipt);
});

router.delete('/receipt', async(req: Request, res: Response) => {
    const receipt = deleteReceipt();
    return res.status(200).send(receipt);
});

// Export the route
export { router as receiptRouter };