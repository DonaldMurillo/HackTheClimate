import mongoose from 'mongoose';

interface LineItem {
    itemDesc: string;      //(Item Description)
    itemQty: number;	    //(Item Quantity)
    itemCPU: number;	    //(Item Cost Per Unit)
    itemTotal: number;
}

export interface Receipt extends mongoose.Document {
    rcptImg: string;	            // (receipt image url)
    rcptDesc: string;	    // (ex: “Food Supplies”  | “Hygiene articles”)
    rcptTotal: number;	            // (ex: “17,500 NIO / 551.70 USD”)
    rcptCurrency: string;	        // (ex: “nio”)
    rcptAdditionalNote: string;	    // (ex: see receipt/invoice from Casa Congo on pg. 8)
    lineItems: LineItem[];
}