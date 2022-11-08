import { IPlant } from '.';

export default interface IPlantModel {
  getAll(): Promise<IPlant[]>
  create(plant: Omit<IPlant, 'id'>): Promise<IPlant>
  getById(id: string): Promise<IPlant | null>
  removeById(id: string): Promise<IPlant | null>
  update(plant: IPlant): Promise<IPlant>
}
