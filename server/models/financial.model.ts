import { Receipt } from './receipt.model';

interface ReliefPackageCosts {
	headlineReliefCostsContentDescr: string; //(COSTS & CONTENT OF CORONA RELIEF PACKAGE (each family received two bags since our bags are too small to fit the items we sent))
	handSanitizer: number;     
	masks: number;      
	bodysoap: number;       
	detergent: number;      
	rice: number;        //(10 pound /4.54kg)
	beans: number;        //(5 pound /2.27kg)
	sugar: number;        //(3 pound /1.36kg)
	mazeca: number;        //(1 pack)
	toothpaste: number;         
	oats: number;      		//(1 pack)
	salt: number;     		//(2 packs)
	matchboxes: number;        //(5 packs)
	oil: number;      			//(2litres)
	toiletPaper: number;       
	dieselPerDistribution: number;        
	casaCongoDistributionTime: number;         //(incl. localsalaries)
	lunchForWorkers: number;      
	instructionsPrinting: number;      
	BFWPBagsMasksForWorkers: number;        
	plasticCoverFoodFromRain: number;       //(farda de plastico)
	totalPerFamily: number;       
	totalForFiftyFamilies: number;      
}

// FINANCIAL:      Page 6:
interface AdditionalCosts {
	exchangeRate: number;  
	fundsWiredUsd: number;	
	prevLocalBalance: number;    
	totalLocalBalance: number; 
	deliveryCosts: number; 	
	endingLocalBalance: number;	
	paymentConfirmationImg: string;
	funds: OrganizationFunds[];
}		

interface OrganizationFunds {
	orgName: string; 
	orgFundsUsd: number;   
}

export interface Financial {
	reliefPackageCosts: ReliefPackageCosts[];
	additionalCosts: AdditionalCosts[];
	receipts: Receipt[];
}
