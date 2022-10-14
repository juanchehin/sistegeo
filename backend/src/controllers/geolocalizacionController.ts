import { Request, Response, NextFunction, response } from 'express';
import pool from '../database';
const fs = require('fs');

const path = require('path');

class GeolocalizacionController {

// ==================================================
//        .....
// ==================================================

public async recibeData(req: Request, res: Response): Promise<void> {
     console.log("req body en back es : ",req.body);

 }
 
}


const geolocalizacionController = new GeolocalizacionController;
export default geolocalizacionController;