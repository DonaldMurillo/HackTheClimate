import { Financial } from './financial.model';

interface Organization {
    org_img: string;
    org_name: string;	        //(ex: Casa Congo)
    org_url: string;	            //(ex: casacongo.org)
    org_location: string;		//(ex: “Based in Nicaragua”)
    org_contribution: string;	//(ex: “Operations on ground & Coordination ”)
}

interface Employee {
    name: string;
    title: string;
    role: string;
    email: string;
}

export interface Event {
    project_execution_date: Date;
    project_location: string;
    report_created_date: Date;
    created_by: string[];
    number_families_reached: number;
    number_families_descr: string;
    number_families_sub_descr: string;
    bottles_given_total: number;
    bottles_required: number;
    bottles_required_description: string;
    number_salaries_paid: number;
    number_salaries_paid_descr: string;
    salaried_employees_local: string[];
    location_of_impact: string;
    location_map_img: string;   // img url
    event_photos_header: string;
    event_photos: string[];     // img url
    organizations_involved: Organization[];
    next_delivery: string;      //ex: “NEXT DELIVERY BETWEEN 20 -40 DAYS”
    empl_contact_list: Employee[];

    financial: Financial;
}