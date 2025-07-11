import axios from "axios";
import { BASE_URL } from "../utils/system";

/* two functions to search products from backend*/
export function findAll(){
    return axios.get(`${BASE_URL}/products/?size=12`);
    
}

export function findById(id: number){
    return axios.get(`${BASE_URL}/products/${id}`);
}

