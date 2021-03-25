import mongoose from 'mongoose';
import { Financial } from './financial.model';

export const financialSchema = new mongoose.Schema<Financial>({

});

// The first section about Mongoose schemas might be useful.  It has a list of the data types in Mongoose
// which should be the same as MongoDB (I found this a helpful refresher on this, lol)
// https://mongoosejs.com/docs/guide.html#definition

// I also referenced Donald's code he wrote with Mongoose here:
// https://github.com/DonaldMurillo/express-test/blob/master/models/supplier.schema.ts

// And a project I did with Mongoose:
// https://github.com/Gabester0/Task-manager-api/tree/main/src/modelshttps://github.com/Gabester0/Task-manager-api/tree/main/src/models