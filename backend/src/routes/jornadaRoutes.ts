import { Router } from 'express';

var mdAutenticacion = require('../middlewares/autenticacion');

import jornadaController from '../controllers/jornadaController';

class JornadaRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/inicio', jornadaController.inicioJornada);
        this.router.get('/trazabilidad', jornadaController.trazabilidad);
        this.router.get('/fin/:IdVehiculo/:IdUsuario', jornadaController.finJornada);

        // this.router.get('/clientes/:desde', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin],personasController.listarClientes);
        // this.router.put('/cliente/eliminar/:IdPersona', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], personasController.eliminarCliente);    // Actualiza
        // this.router.put('/cliente/actualizar/:id',  [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], personasController.actualizaCliente);    // Actualiza se quito esto , 13/03/20 --> 
        // this.router.post('/cliente' ,  [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], personasController.createCliente);    // Se quito la autenticacion con token para esto
        // this.router.get('/clientes/plan/:desde/:IdPlan', [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], personasController.listarClientesPlan);    // ,mdAutenticacion.verificaAdmin 
        // this.router.put('/cliente/activar/:IdPersona',  [mdAutenticacion.verificaToken,mdAutenticacion.verificaProfesionalAdmin], personasController.activarCliente);    // Actualiza se quito esto , 13/03/20 --> 

    }

}

const jornadaRoutes = new JornadaRoutes();
export default jornadaRoutes.router;