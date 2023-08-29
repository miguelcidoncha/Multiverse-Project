import { Service } from "../Service/service";

export const CardsHandler = {
    
        loadCards(){
            return Service.getAllCards();
        }
       
    }
    
    export default CardsHandler;