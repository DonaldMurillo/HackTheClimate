import { Receipt } from './receipt.model';

export interface Financial {


    receipts: Receipt[];
}

/*
FINANCIAL:      Page 4:
headline_relief_costs_content_descr: str (COSTS & CONTENT OF CORONA RELIEF PACKAGE (each family received two bags since our bags are too small to fit the items we sent))

hand_sanitizer: number;     (ex: "150 NIO  4.73 USD ")
masks: number;      (ex: "200 NIO  6.31 USD ")
bodysoap: number;       (ex: "16 NIO  0.50 USD ")
detergent: number;      (ex: "4.2 NIO  0.13 USD ")
rice (10 pound /4.54kg): number;        (ex: "135 NIO  4.26 USD ")
beans (5 pound /2.27kg): number;        (ex: "180 NIO  5.67 USD ")
Sugar (3 pound /1.36kg): number;        (ex: "37.50 NIO  1.18 USD ")
mazeca (1 pack): number;        (ex: "12.5 NIO  0.39 USD ")
toothpaste: number;         (ex: "27.92 NIO  0.88 USD ")
oats (1 pack): number;      (ex: "24 NIO  0.76 USD ")
salt (2 packs): number;     (ex: "4.4 NIO  0.14 USD ")
matchboxes(5 packs): number;        (ex: "1.92 NIO  0.06 USD ")
oil (2litres): number;      (ex: "75.48 NIO  2.38 USD ")
toilet_paper: number;       (ex: "34.24 NIO  1.08 USD ")
diesel_per_distribution: number;        (ex: "60 NIO  1.89 USD ")
casa_congo_distribution_time (incl. localsalaries): number;         (ex: "70 NIO  2.21 USD ")
lunch_for_workers: number;      (ex: "11.62 NIO  0.37 USD ")
instructions_printing: number;      (ex: "10 NIO  0.32 USD ")
BFWP_bags_masks_for_workers: number;        (ex: "126 NIO  3.97 USD ")
Plastic_cover_food_from_rain (farda de plastico): number;       (ex: "6.8 NIO  0.21 USD ")
total_per_family: number;       (ex: "1,187.58 NIO 37.44 USD ")
total_for_50_families: number;      (ex: "59,379.00 NIO 1,850 USD ")

FINANCIAL:      Page 6:
exchange_rate: number;  (ex: “Exchange Rate 1.00 USD = 31.72 NIO”) (This should be a decimal number that we multiply against nio value to get usd values: 0.031525851197982)

funds_wired_usd: number;	(ex: “Funds Wired: 1,788.55 USD  56,732.80 NIO”)
prev_local_balance: number;    (ex: “Cash in Nicaragua from previous activities: 94.58 USD  3,000.00 NIO”)
total_local_bal: number; (ex: “Total cash available on ground: 1,883.13 USD  59'732.88 NIO”)
delivery_costs: number; 	(ex: “Effective costs for HOME delivery:  1,871.97 USD  59'379.00 NIO”)
ending_local_bal: number;	(ex: “Remaining cash on ground:  11.16 USD  354 NIO”)
payment_confirmation_img: string;		(image url)

funds: [
	{
		org_name: string; (ex: “Horizon Group (Clients)” | “BFWP Members & Donors”)
		org_funds_usd: number;   (ex: 1370 | 501.97)
    }
]
*/
