import { IPlant, IOpsInfo } from '../interfaces';
import { IPlantModel } from '../interfaces/IPlantModel';
import { FileType, HandleFile } from './HandleFile';

class PlantModel implements IPlantModel {
  private handleFile = new HandleFile();

  private async updateOpsInfo(incrementAmount = 1): Promise<number> {
    const opsInfo = await this.handleFile.readFile<IOpsInfo>(FileType.OpsInfo);
    opsInfo.createdPlants += incrementAmount;

    await this.handleFile.saveFile(FileType.OpsInfo, opsInfo);

    return opsInfo.createdPlants;
  }

  public async getAll(): Promise<IPlant[]> {
    const plants = await this.handleFile.readFile<IPlant[]>(FileType.Plants);
    return plants;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const plants = await this.getAll();

    const newPlantId = await this.updateOpsInfo(1);
    const newPlant = { id: newPlantId, ...plant };
    plants.push(newPlant);

    await this.handleFile.saveFile(FileType.Plants, plants);

    return newPlant;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();

    const plantById = plants.find((plant) => plant.id === parseInt(id, 10));
    if (!plantById) return null;
    return plantById;
  }

  public async removeById(id: string): Promise<IPlant | null> {
    const plants = await this.getAll();

    const removedPlant = plants.find((plant) => plant.id === parseInt(id, 10));
    if (!removedPlant) return null;

    const newPlants = plants.filter((plant) => plant.id !== parseInt(id, 10));
    this.handleFile.saveFile(FileType.Plants, newPlants);

    return removedPlant;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    const plants = await this.getAll();

    const updatedPlants = plants.map((editPlant) => {
      if (plant.id === editPlant.id) return { ...plant };
      return editPlant;
    });

    await this.handleFile.saveFile(FileType.Plants, updatedPlants);

    return plant;
  }

  public async getPlantsThatNeedsSun() {
    const plants = await this.getAll();

    const filteredPlants = plants.filter((plant) => plant.needsSun);

    return filteredPlants;
  }
}

export default PlantModel;
