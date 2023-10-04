![frete](https://github.com/ElisanaSalvador/Desafio-2.0-Cubos-Academy/assets/141875584/a1b4de95-90fa-4eed-848d-b77ab0b603af)


## API de Cálculo de frete

Esta é uma API para cálcular o frete de um produto.

Para executar o projeto usei o Visual Studio Code que pode ser encontrado neste link: https://code.visualstudio.com/download.
Utilizei a biblioteca:  nodemon 3.0.1

Esta API possui três rotas e todas utilizam o método **GET**, sendo elas:

A rota **GET** `/produtos` que lista os produtos que estão no arquivo `produtos.js`, na pasta `bancodedados`.

A rota **GET** `/produtos/:idProduto` faz o detalhamento de um produto através do `id`, passado como parâmetro na rota.

A rota **GET** `/produtos/:idProduto/frete/:cep` recebe dois parâmetros de rota. O primeiro `idProduto` receberá o id do produto que será calculado o frete, e o segundo `cep` receberá o cep (sem pontuação) para que seja encontrado o estado referente ao cep informado,
esta rota deverá calcular o frete do produto de acordo com as regras abaixo.

Para encontrar o estado através do cep informado, uso a função `getStateFromZipcode`, da biblioteca `utils-playground`, que pode ser baixada no **NPM**, e pode ser encontrado no link abaixo:

https://www.npmjs.com/package/utils-playground


**Regras usadas no cálculo de frete**

-   O valor padrão do frete será de `12%` do valor do produto
-   Para os estados `BA, SE, AL, PE e PB` o valor do frete será de `10%`
-   Para os estados `SP e RJ` o valor do frete será de `15%`

**Exemplo: Listar**

![listar_produtos](https://github.com/ElisanaSalvador/Desafio-2.0-Cubos-Academy/assets/141875584/e76f1482-bbfc-4277-a187-a3883d2b8f44)

**Exemplo: Detalhar um produto**

![detalharProduto](https://github.com/ElisanaSalvador/Desafio-2.0-Cubos-Academy/assets/141875584/d62ab042-d335-4ace-8330-0725b26c7673)

**Exemplo: Calcular frete do produto**

![calcularFreteProduto](https://github.com/ElisanaSalvador/Desafio-2.0-Cubos-Academy/assets/141875584/a9948bb0-a36b-4f66-917f-13da7940e213)



**Observações:**

-   Todas as rotas seguem os padrões **REST**.
-   Todas as requisições são **assíncronas**.

---

