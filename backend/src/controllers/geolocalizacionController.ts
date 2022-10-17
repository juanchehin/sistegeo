import { Request, Response } from 'express';


class GeolocalizacionController {

    // ==================================================
    //        .....
    // ==================================================
    
    public async recibeData(req: Request, res: Response): Promise<void> {
         console.log("req en back es : ",req);
    
     }
     
    // ==================================================
    //   Obtiene la data de localizacion y la devuelve
    //    al front 
    // ==================================================
    
    public async getData(req: Request, res: Response): Promise<void> {
        console.log("req getData : ",req);
    
        res.json('data devuelta');
    
    }
}


const geolocalizacionController = new GeolocalizacionController;
export default geolocalizacionController;