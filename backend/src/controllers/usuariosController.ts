import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {

// ==================================================
//        Lista personas desde cierto valor
// ==================================================
public async listarChoferesPaginado(req: Request,res: Response): Promise<void> {
    var desde = req.query.desde || 0;
    desde  = Number(desde);

    var incluyeBajas = req.query.incluyeBajas || 0;
    incluyeBajas  = Number(incluyeBajas);
    
    pool.query(`call bsp_listar_choferes_paginado('${desde}','${incluyeBajas}')`, function(err: any, result: any){
        if(err){
            console.log("error", err);
            return;
        }
        res.json(result);
    })
}
     
// ==================================================
//   dar baja chofer
// ==================================================

public async darBajaChofer(req: Request, res: Response): Promise<void> {
    
    pool.query(`call bsp_dar_baja_chofer()`, function(err: any, result: any){
        if(err){
            console.log("error", err);
            return;
        }
        res.json({
            "vehiculos": result
        });
    })
    
}
}


const usuariosController = new UsuariosController;
export default usuariosController;