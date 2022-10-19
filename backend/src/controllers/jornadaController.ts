import { Request, Response } from 'express';
import pool from '../database';
const falso = require("@ngneat/falso")

// lt y lng del local de la esquina - Aguilares
var latitud = -27.4356104;
var longitud = -65.6103222;
var IdVehiculo = 1;

class JornadaController {

      

    // ==================================================
    //        .....
    // ==================================================
    
    public async trazabilidad(req: Request, res: Response): Promise<void> {    
        
        // var latitud = req.body.latitud;
        // var longitud = req.body.longitud;
        // var IdVehiculo = req.body.IdVehiculo;
        
        // **** Simulacion de latitud y longitud *****

        // var latitud = falso.randLatitude();
        // var longitud = falso.randLongitude();
        // var IdVehiculo = 1;

        // actualizacion de latidud y longitud
        const intervalMs = 50000
        setInterval( () => {
            // latitud = latitud + falso.randNumber({ min: -1.0, max: 1.0 });
            // longitud = longitud + falso.randNumber({ min: -1.0, max: 1.0 });

            latitud = latitud + 0.0001;
            longitud = longitud + 0.0001;

        }, intervalMs)

        res.json({
            IdVehiculo: IdVehiculo,
            latitud: latitud,
            longitud: longitud
        });

        // pool.query(`call bsp_trazabilidad('${IdVehiculo}','${latitud}','${longitud}')`, function(err: any, result: any){
        //     if(err){
        //         console.log("error", err);
        //         return;
        //     }
        //     res.json({
        //         "whatch": 'Ok'
        //     });
        // })

     }
    // ==================================================
    //        .....
    // ==================================================
    
    public async inicioJornada(req: Request, res: Response): Promise<void> {      

        var IdVehiculo = req.body.IdVehiculo;
        var IdUsuario = req.body.IdUsuario;

        if(IdUsuario === undefined)
        {
            return;
        }

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