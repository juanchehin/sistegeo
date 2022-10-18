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

        var IdVehiculo = req.body.IdVehiculo;
        var IdUsuario = req.body.IdUsuario;

        pool.query(`call bsp_inicio_jornada('${IdVehiculo}','${IdUsuario}')`, function(err: any, result: any){
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
        var IdVehiculo = req.params.IdVehiculo;
        var IdUsuario = req.params.IdUsuario;

        pool.query(`call bsp_fin_jornada('${IdVehiculo}','${IdUsuario}')`, function(err: any, result: any){
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