import express, { Request, Response } from 'express';
import { Event } from '../models/event.model';

/** Route that will be added to the express */

const router = express.Router();
// const path: string = '/api/v1/example';

// Define functions

const getEvent = () => {return "Got an event"}
const deleteEvent = () => {return "Deleted event"}
// const addEvent = () => {return "Added event"}
// const editEvent = () => {return "Edited event"}

// Define routes
router.get('/event', async (req: Request, res: Response) => {
    const event = getEvent();
    return res.status(200).send(event);
});

router.post('/event', async (req: Request, res: Response) => {
    const event: Event = {...req.body};
    return res.status(201).send(event);
});

router.patch('/event', async (req: Request, res: Response) => {
    const event: Event = {...req.body};
    return res.status(201).send(event);
});

router.delete('/event', async(req: Request, res: Response) => {
    const event = deleteEvent();
    return res.status(200).send(event);
});

// Export the route
export { router as eventRouter }