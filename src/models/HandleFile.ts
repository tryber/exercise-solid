import fs from 'fs/promises';
import path from 'path';

export enum FileType {
  Plants = 'plants',
  OpsInfo = 'opsInfo',
}

const PATHS = {
  plants: path.join(__dirname, 'database', 'plantsData.json'),
  opsInfo: path.join(__dirname, 'database', 'opsInfo.json'),
};

export class HandleFile {
  private PATHS = PATHS;

  public async saveFile<DataType>(type: FileType, data: DataType): Promise<void> {
    await fs.writeFile(this.PATHS[`${type}`], JSON.stringify(data, null, 2));
  }

  public async readFile<DataType>(type: FileType): Promise<DataType> {
    const dataRaw = await fs.readFile(this.PATHS[`${type}`], { encoding: 'utf8' });
    const data: DataType = JSON.parse(dataRaw);
    return data;
  }
}
