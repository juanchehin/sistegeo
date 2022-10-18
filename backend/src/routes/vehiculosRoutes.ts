import { Router } from 'express';

// var mdAutenticacion = require('../middlewares/autenticacion');

import vehiculosController from '../controllers/vehiculosController';

class VehiculosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // this.router.post('/setData', geolocalizacionController.setData);
        this.router.get('/listar', vehiculosController.listarVehiculos);
    }

}

const vehiculosRoutes = new VehiculosRoutes();
export default vehiculosRoutes.router;