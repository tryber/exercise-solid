import { IModelReader, IModelWriter, IModelDelete } from './IModel';
import { IPlant } from '../../interfaces';

export default interface IPlantModel extends
  IModelReader<IPlant>,
  IModelWriter<IPlant>,
  IModelDelete {}
