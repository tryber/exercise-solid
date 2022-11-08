## Exercício

Essa aplicação controla um catálogo de plantas para um instituto de botânica. Esta API foi escrita em Typescript e está dividida em camadas conforme arquitetura Model Service Controller (MSC), entretanto é necessário adaptar o código de modo a transformá-lo em uma API respeitando os princípios SOLID.
Para isso, você deverá modificar o arquivo `./src/services/PlantService.ts`, bem como criar demais arquivos que sejam necessários.

- Foque nos princípios aprendidos hoje: `Single Responsibility`, `Dependency Inversion` e `Open/Closed`.
- Crie pelo menos o arquivo `./src/services/PlantModel.ts` responsável por manipular as informações que estão no `./src/models/database`.
- Lembre-se de aproveitar os pilares da Orientação a Objetos quando precisar 😎

Já foram criados os endpoints:
- `GET /plants`: retorna todas as plantas;
- `POST /plants`: cria uma planta nova;

Será necessário adicionar outros endpoints:
- `GET /plants/:id`: retorna uma planta com o id;
- `DELETE /plants/:id`: deleta uma planta com o id;
- `PUT /plants/:id`: sobrescreve a planta com id;
- `GET /sunny`: retorna as plantas que precisam de sol.

Além disso, crie as validações necessárias para os novos endpoints.

## Exercício Bônus

- Crie um banco de dados MySQL para persistir os dados das plantas.

Dica: se os pilares da Orientação a Objetos foram seguidos, você irá realizar modificações apenas na camada _Model_ da sua aplicação.
