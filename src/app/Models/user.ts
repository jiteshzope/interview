import { Address } from "./Address";
import { Company } from "./Company";


export class User {

    email : string='';
    id : string='';
    phone : string='';
    name : string;
    username : string='';
    website : string='';
    company :Company;
    address : Address;

    constructor(){
        
    }

}