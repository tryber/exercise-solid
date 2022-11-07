import { Router } from 'express';

import PlantController from '../controllers/PlantController';
import PlantModel from '../models/PlantModel';
import PlantService from '../services/PlantService';

const plantModel = new PlantModel();
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const sunnyRouter = Router();

sunnyRouter.get('/', (req, res, next) => plantController.getPlantsThatNeedsSun(req, res, next));

export default sunnyRouter;
