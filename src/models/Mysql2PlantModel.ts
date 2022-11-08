import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IPlant } from '../interfaces';
import { IPlantModel } from '../interfaces/IPlantModel';

class PlantModel implements IPlantModel {
  private conn = connection;

  public async getAll(): Promise<IPlant[]> {
    const query = `SELECT
      id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency
      FROM plants`;
    const [rows] = await this.conn.execute(query);
    const plants = rows as IPlant[];
    return plants;
  }

  public async create(plant: Omit<IPlant, 'id'>): Promise<IPlant> {
    const {
      breed, needsSun, origin, size, waterFrequency,
    } = plant;
    const query = `INSERT INTO plants (breed, needs_sun, origin, size, water_frequency)
      VALUES (?, ?, ?, ?, ?)`;
    const values = [breed, needsSun, origin, size, waterFrequency];

    const [rows] = await this.conn.execute<ResultSetHeader>(query, values);

    const newPlant = {
      id: rows.insertId,
      ...plant,
    };
    return newPlant;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const query = `SELECT
      id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency
      FROM plants WHERE id = ?`;
    const values = [id];
    const [rows] = await this.conn.execute(query, values);

    const plantById = rows as IPlant[];
    if (plantById.length === 0) return null;

    return plantById[0];
  }

  public async removeById(id: string): Promise<IPlant | null> {
    const removedPlant = await this.getById(id);
    if (!removedPlant) return null;

    const query = 'DELETE FROM plants WHERE id = ?';
    const values = [id];
    await connection.execute(query, values);

    return removedPlant;
  }

  public async update(plant: IPlant): Promise<IPlant> {
    const {
      id, breed, needsSun, origin, size, waterFrequency,
    } = plant;

    const query = `UPDATE plants 
      SET breed = ?, needs_sun = ?, origin = ?, size = ?, water_frequency = ?
      WHERE id = ?`;
    const values = [breed, needsSun, origin, size, waterFrequency, id];
    await this.conn.execute(query, values);

    return plant;
  }

  public async getPlantsThatNeedsSun() {
    const [rows] = await this.conn.execute(
      `SELECT
      id, breed, size, needs_sun as needsSun, origin, water_Frequency as waterFrequency
      FROM plants WHERE needs_sun = true`,
    );

    const plants = rows as IPlant[];
    return plants;
  }
}

export default PlantModel;
