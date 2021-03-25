import { Receipt } from './receipt.model';

interface IndividualItems {
	[items: string]: number;
}
     
interface ReliefPackageCosts {
	headlineReliefCostsContentDescr: string; //(COSTS & CONTENT OF CORONA RELIEF PACKAGE (each family received two bags since our bags are too small to fit the items we sent)
	reliefPackageContents: IndividualItems[];
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
	reliefPackageCosts: ReliefPackageCosts;
	additionalCosts: AdditionalCosts;
	receipts: Receipt[];
}