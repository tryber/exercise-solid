## Exercício

Essa aplicação controla um catálogo de plantas para um instituto de botânica. Esta API foi escrita em Typescript e está dividida em camadas conforme a arquitetura MSC (Model, Service e Controller).

A aplicação possui os seguintes endpoints:
- `GET /plants`: retorna todas as plantas;
- `POST /plants`: cria uma planta nova.

Analise o código desta API e verifique as informações obtidas em cada endpoint utilizando um client como o Insomnia, Postman ou Thunder Client.

Agora é necessário adaptar o código de modo a transformá-lo em uma API respeitando os princípios do SOLID. Para isso, você deverá:

- Modificar o arquivo `./src/services/PlantService.ts`,
- Adicionar os endpoints:
  - `GET /plants/:id`: retorna uma planta com o id;
  - `DELETE /plants/:id`: deleta uma planta com o id;
  - `PUT /plants/:id`: sobrescreve a planta com id;
- Realizar validações necessárias para os novos endpoints;
- Implementar na camada **Model**, pelo menos uma classe responsável por manipular as informações que estão no `./src/models/database`. Essa classe deverá implementar a interface `IModel`:


```ts
import { IPlant } from './IPlant';

export default interface IPlantModel {
  getAll(): Promise<IPlant[]>
  create(plant: Omit<IPlant, 'id'>): Promise<IPlant>
  getById(id: string): Promise<IPlant | null>
  removeById(id: string): Promise<IPlant | null>
  update(plant: IPlant): Promise<IPlant>
}
```
- Criar demais camadas e/ou arquivos que sejam necessários.

Dicas:
- Foque nos princípios aprendidos hoje: `Single Responsibility`, `Dependency Inversion` e `Open/Closed`;
- Lembre-se de aproveitar os pilares da Orientação a Objetos quando precisar 😎.


## Exercício Bônus

- Crie um banco de dados MySQL para persistir os dados das plantas.
- Adicione um novo Model, responsável por manipular as informações do banco de dados.

Dica: se os pilares da Orientação a Objetos forem seguidos, você irá realizar modificações apenas na camada _Model_ da sua aplicação.