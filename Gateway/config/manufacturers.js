const axios = require('axios');

class Manufacturers{
    data = null;
    status = null;
    message = null;
    constructor(){
        this.getManufacturers().then((manufacturers)=>{
             manufacturers = manufacturers.map(cars=>{
                return cars.name;
            })
            this.data = manufacturers;
            this.status = 200;
        }).catch((error) => {
            this.data = null;
            this.status = 500;
            this.message = error;
         }); 
        
            
        }
        
    //GET CAR MANUFACTURERS
    getManufacturers(){
        return new Promise((resolve, reject)=>{
            axios.get('https://private-anon-1ebec0f374-carsapi1.apiary-mock.com/manufacturers').then((manufacturers =>{
                manufacturers = manufacturers.data;
                resolve(manufacturers)
            })).catch((error)=>{
                reject(error)
            })
             
        });  
    }
}
module.exports = new Manufacturers();