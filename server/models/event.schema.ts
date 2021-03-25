import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
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

    /*
    organizationsInvolved: Organization[],
    nextDelivery: String,      //ex: “NEXT DELIVERY BETWEEN 20 -40 DAYS”
    emplContactList: Employee[],
    financial: Financial;
}
*/
});


const Event = mongoose.model('Event', eventSchema);
/*
https://github.com/Gabester0/Task-manager-api/blob/main/src/models/user.js

interface Organization {
    orgImg: string;
    orgName: string;	        //(ex: Casa Congo)
    orgUrl: string;	            //(ex: casacongo.org)
    orgLocation: string;		//(ex: “Based in Nicaragua”)
    orgContribution: string;	//(ex: “Operations on ground & Coordination ”)
}

interface Employee {
    name: string;
    title: string;
    role: string;
    email: string;
}

export interface Event {
    projectExecutionDate: Date;
    projectLocation: string;
    reportCreatedDate: Date;
    createdBy: string[];
    numberFamiliesReached: number;
    numberFamiliesDescr: string;
    numberFamiliesSubDescr: string;
    bottlesGivenTotal: number;
    bottlesRequired: number;
    bottlesRequiredDescription: string;
    numberSalariesPaid: number;
    numberSalariesPaidDescr: string;
    salariedEmployeesLocal: string[];
    locationOfImpact: string;
    locationMapImg: string;   // img url
    eventPhotosHeader: string;
    eventPhotos: string[];     // img url
    organizationsInvolved: Organization[];
    nextDelivery: string;      //ex: “NEXT DELIVERY BETWEEN 20 -40 DAYS”
    emplContactList: Employee[];

    financial: Financial;
}
*/