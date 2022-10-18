import { Request, Response } from 'express';

// var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

import pool from '../database';

class LoginController {

// ========================================================
// Login
// ========================================================

public async login(req: Request, res: Response){

    const user = req.body.user;
    const pass = req.body.password;

    pool.query(`call bsp_login('${user}','${pass}')`, function(err: any, result: string | any[]){

        if(err){
            console.log("err es : ",err);
        }
    
        if(result[0][0].Mensaje !== 'Ok' || null){
            
            res.json({
                ok: true,
                mensaje : 'Error de credenciales'
            });  
            return;
        }
        
        // Respuesta
        res.status(200).json({
            ok: true,
            usuario: result[0][0].pUsuario1,
            mensaje : 'Ok',
            // token: token,    // <-- Devuelvo el token al front end
            IdUsuario: result[0][0].pIdUsuario
        });
    
})

}

// ==========================================
//  Renueva TOKEN
// ==========================================
public async renuevatoken(req: Request, res: Response): Promise<void> {
    
    var body = req.body;    // Usuario y contraseña

    // var token = jwt.sign({ usuario: body.correo }, SEED, { expiresIn: 14400});// 4 horas

    res.status(200).json({
        ok: true,
        // token: token
    });

}

}

const loginController = new LoginController;
export default loginController;