import { IPlant, INewPlant } from '../../interfaces';
import { IServiceReader, IServiceWriter, IServiceDelete } from './IService';

export default interface IPlantService extends
  IServiceReader<IPlant>,
  IServiceWriter<IPlant, INewPlant>,
  IServiceDelete {}
