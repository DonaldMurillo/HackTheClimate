import mongoose from 'mongoose';
import { Financial } from './financial.model';
import { receiptSchema } from './receipt.schema';

const financialSchema = new mongoose.Schema<Financial>({

        reliefPackageCosts: {
            headlineReliefCostsContentDescr: String, //(COSTS & CONTENT OF CORONA RELIEF PACKAGE (each family received two bags since our bags are too small to fit the items we sent)
            items: String,
            reliefPackageContents: [
                {
                    itemName: {
                        String,
                        required: true
                },
                    quantity: {
                        Number,
                        required: true
                    },
                    unitPrice: {
                        Number,
                        required: true
                    }
                }
            ],
            totalPerFamily: Number,       
            totalForFiftyFamilies: Number,      
        },
        additionalCosts: {
            exchangeRate: Number,  
            fundsWiredUsd: Number,	
            prevLocalBalance: Number,    
            totalLocalBalance: Number, 
            deliveryCosts: Number, 	
            endingLocalBalance: Number,	
            paymentConfirmationImg: String,
            funds: [
                {
                    orgName: {
                        String,
                        required: true
                    }, 
                    orgFundsUsd: {
                        Number,
                        required: true
                    },   
                }
            ],
        },
        receipts: [receiptSchema]
});

const Financial = mongoose.model('Financial', financialSchema);