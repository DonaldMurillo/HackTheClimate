export interface Receipt {

}

/*
RECEIPTS:       Page 7:  &  Page 8:  &  Page 9:
receipts: [
	{
		rcpt_id: UUID;
		rcpt_img: string;	(receipt image url)
		rcpt_articles_type: string;	(ex: “Food Supplies”  | “Hygiene articles”)
		rcpt_total: number;	(ex: “17,500 NIO / 551.70 USD”)
		rcpt_currency: string;	(ex: “nio”)
		rcpt_additional_note: string;	 (ex: see receipt/invoice from Casa Congo on pg. 8)
		rcpt_line_items: [
            {
                item_desc: string;	(Item Description)
                    item_qty: number;	(Item Quantity)
                    item_cpu: number;	(Item Cost Per Unit)
                item_total: number;
            }
        ]
    }
]
*/
