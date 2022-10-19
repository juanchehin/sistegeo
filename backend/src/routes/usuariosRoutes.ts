import { Router } from 'express';

// var mdAutenticacion = require('../middlewares/autenticacion');

import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // this.router.post('/setData', geolocalizacionController.setData);
        this.router.get('/choferes/listar/:desde/:incluyeBajas', usuariosController.listarChoferesPaginado);
    }

}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;