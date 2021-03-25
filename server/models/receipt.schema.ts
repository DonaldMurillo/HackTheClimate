import mongoose from 'mongoose';
import { Receipt } from './receipt.model';

const receiptSchema = new mongoose.Schema<Receipt>({
    rcptImg: String,	            // (receipt image url)
    rcptDesc: {
        String,
        required: true,
    },	    // (ex: “Food Supplies”  | “Hygiene articles”)
    rcptTotal: {
        Number,
        required: true,
    },	            // (ex: “17,500 NIO / 551.70 USD”)
    rcptCurrency: {
        String,
        required: true,
    },	        // (ex: “nio”)
    rcptAdditionalNote: String,	    // (ex: see receipt/invoice from Casa Congo on pg. 8)
    lineItems: [{
        itemDesc: {
            String,
            required: true,
        },      //(Item Description)
        itemQty: {
            Number,
            required: true,
        },	    //(Item Quantity)
        itemCPU: {
            Number,
            required: true,
        },	 //(Item Cost Per Unit)
        itemTotal: {
            Number,
            required: true,
        },
    }],
});

const Receipt = mongoose.model('Receipt', receiptSchema);