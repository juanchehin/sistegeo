import { Router } from 'express';

// var mdAutenticacion = require('../middlewares/autenticacion');

import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        // Choferes
        this.router.post('/choferes/alta', usuariosController.altaChofer);
        this.router.get('/choferes/listar/:desde/:incluyeBajas', usuariosController.listarChoferesPaginado);
        // Usuarios
    }

}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;