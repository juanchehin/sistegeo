import { Request, Response } from 'express';
import pool from '../database';

class VehiculosController {

// ==================================================
//        Lista personas desde cierto valor
// ==================================================
public async listarVehiculos(req: Request,res: Response): Promise<void> {
    
    pool.query(`call bsp_listar_vehiculos()`, function(err: any, result: any){
        if(err){
            console.log("error", err);
            return;
        }
        res.json({
            "vehiculos": result
        });
    })
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


const vechiculosController = new VehiculosController;
export default vechiculosController;