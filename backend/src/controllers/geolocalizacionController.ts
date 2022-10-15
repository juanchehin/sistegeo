import { Request, Response, NextFunction, response } from 'express';
import pool from '../database';
const fs = require('fs');

const path = require('path');

class GeolocalizacionController {

// ==================================================
//        .....
// ==================================================

public async recibeData(req: Request, res: Response): Promise<void> {
     console.log("req en back es : ",req);

 }
 
}


const geolocalizacionController = new GeolocalizacionController;
export default geolocalizacionController;