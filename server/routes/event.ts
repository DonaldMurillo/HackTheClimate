import express, { Request, Response } from 'express';
import { Event } from '../models/event.model';


/** Route that will be added to the express */

const router = express.Router();
const path: string = '/api/v1/example';

// Define functions

const getEvent = () => {return "Got an event"}
const deleteEvent = () => {return "Deleted event"}
// const newEvent = () => {return "Posted event"}

// Define routes
router.get('/events', async (req: Request, res: Response) => {
    const event = getEvent();
    return res.status(200).send(event);
});

router.post('/events', async (req: Request, res: Response) => {
    const event: Event = {...req.body};
    return res.status(201).send(event);
});

router.patch('/events', async (req: Request, res: Response) => {
    const event: Event = {...req.body};
    return res.status(201).send(event);
});

router.delete('/events', async(req: Request, res: Response) => {
    const event = deleteEvent();
    return res.status(200).send(event);
});

// Export the route
export { router as eventRouter }