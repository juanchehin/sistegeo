import { Request, Response } from 'express';
import pool from '../database';

class JornadaController {

    // ==================================================
    //        .....
    // ==================================================
    
    public async trazabilidad(req: Request, res: Response): Promise<void> {      

        var latitud = req.body.latitud;
        var longitud = req.body.longitud;

        pool.query(`call bsp_trazabilidad('${latitud}','${longitud}')`, function(err: any, result: any){
            if(err){
                console.log("error", err);
                return;
            }
            // res.json({
            //     "whatch": 'Ok'
            // });
        })

        // Enviar a BD
     }
    // ==================================================
    //        .....
    // ==================================================
    
    public async inicioJornada(req: Request, res: Response): Promise<void> {      

        var latitud = req.body.latitud;
        var longitud = req.body.longitud;
        var IdVehiculo = req.body.IdVehiculo;

        pool.query(`call bsp_inicio_jornada('${IdVehiculo}','${latitud}','${longitud}')`, function(err: any, result: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json({
                "vehiculos": result
            });
        })

        // Enviar a BD
     }
     
    // ==================================================
    //   Obtiene la data de localizacion y la devuelve
    //    al front 
    // ==================================================
    
    public async finJornada(req: Request, res: Response): Promise<void> {

        pool.query(`call bsp_fin_jornada()`, function(err: any, result: any){
            if(err){
                console.log("error", err);
                return;
            }
            res.json({
                "result": 'Ok'
            });
        })
    
    
    }
}


const jornadaController = new JornadaController;
export default jornadaController;