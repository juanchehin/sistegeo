import { Request, Response } from 'express';


class GeolocalizacionController {

    // ==================================================
    //        .....
    // ==================================================
    
    public async setData(req: Request, res: Response): Promise<void> {
        var latitud;
        var longitud;
        

        latitud = req.body.latitud;
        longitud = req.body.longitud;

        // Enviar a BD
     }
     
    // ==================================================
    //   Obtiene la data de localizacion y la devuelve
    //    al front 
    // ==================================================
    
    public async getData(req: Request, res: Response): Promise<void> {
    
        res.json({
            latitude: -27.4301327,
            longitude: -65.6152168
        });
    
    }
}


const geolocalizacionController = new GeolocalizacionController;
export default geolocalizacionController;