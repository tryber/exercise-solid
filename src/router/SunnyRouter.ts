import { Router } from 'express';

import PlantController from '../controllers/PlantController';

import Mysql2PlantModel from '../models/Mysql2PlantModel';
import PlantService from '../services/PlantService';

const plantModel = new Mysql2PlantModel();
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const sunnyRouter = Router();

sunnyRouter.get('/', (req, res, next) => plantController.getPlantsThatNeedsSun(req, res, next));

export default sunnyRouter;
