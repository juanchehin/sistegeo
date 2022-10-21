import { Request, Response } from 'express';
import pool from '../database';

class UsuariosController {


// ==================================================
//        Inserta un Chofer
// ==================================================
public async altaChofer(req: Request, res: Response) {

    var Apellidos = req.body.Apellidos;
    var Nombres = req.body.Nombres;
    var Password = req.body.Password;
    var Telefono = req.body.Telefono;
    var Observaciones = req.body.Observaciones;
    var DNI = req.body.DNI;
    var Usuario = req.body.Usuario;


    pool.query(`call bsp_alta_chofer('${Apellidos}','${Nombres}','${Password}','${Telefono}','${DNI}','${Observaciones}'')`, function(err: any, result: any, fields: any){
        if(err){
            console.log("error : ", err);
            res.status(404).json({ text: "Ocurrio un problema" });
            return;
        }
        
        if(result[0][0].Mensaje === 'El chofer ya se encuentra cargado'){
            return res.json({
                Mensaje: result[0][0].Mensaje,
                pIdPersona: result[1][0].IdPersona
            });
        }
    
        if(result[0][0].Mensaje !== 'Ok'){
            return res.json({
                ok: false,
                Mensaje: result[0][0].Mensaje
            });
        }

        return res.json({ Mensaje: 'Ok' });
    })

}


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