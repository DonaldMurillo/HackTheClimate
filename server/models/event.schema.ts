import mongoose from 'mongoose';
import { Event } from './event.model';
import { financialSchema } from './financial.schema';

const eventSchema = new mongoose.Schema<Event>({
    projectExecutionDate: Date,
    projectLocation: {
        type: String,
        required: true
    },
    reportCreatedDate: Date,
    createdBy: [{
        type: String,
        required: true,
    }],
    numberFamiliesReached: Number,
    numberFamiliesDescr: String,
    numberFamiliesSubDescr: String,
    bottlesGivenTotal: Number,
    bottlesRequired: Number,
    bottlesRequiredDescription: String,
    numberSalariesPaid: Number,
    numberSalariesPaidDescr: String,
    salariedEmployeesLocal: [ String ],
    locationOfImpact: {
        type: String,
        required: true,
    },
    locationMapImg: String,   // img url
    eventPhotosHeader: String,
    eventPhotos: [ String ],     // img url
    organizationsInvolved: [
        {
            orgImg: String,
            orgName: {
                String,
                required: true
            },	        //(ex: Casa Congo)
            orgUrl: String,	            //(ex: casacongo.org)
            orgLocation: {
                String,
                required: true
            },		//(ex: “Based in Nicaragua”)
            orgContribution: {
                String,
                required: true
            },	//(ex: “Operations on ground & Coordination ”)
        }
    ],
    nextDelivery: String,      //ex: “NEXT DELIVERY BETWEEN 20 -40 DAYS”
    emplContactList: [
        {
            name: {
                String,
                required: true,
            },
            title: {
                String,
                required: true,
            },
            role: {
                String,
                required: true,
            },
            email: {
                String,
                required: true,
            },
        }
    ],
    financial: financialSchema,
});

const Event = mongoose.model('Event', eventSchema);