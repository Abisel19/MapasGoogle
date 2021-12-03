export class Lugar {
    constructor(
        public place_id: string,
        public   formatted_address: string,
        public   name: string,
        public   rating: string,
        public   photos: string,
        public   reviews: string,
    ){        
    }
}