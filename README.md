# Teste de lógica - Desafio TV Globo

Resolução das 4 questões para avaliar a capacidade de análise e resolução de problemas através de algorítmos.

## Características

Escolhi `node.js` para realização das questões. Criei uma aplicação só, com toda sua configuração global de projeto (lint, dependências, etc.) na pasta raiz.

Criei uma pasta `src` onde está o arquivo "main" da aplicação, que é o `index.js`.

As questões propriamente ditas estão dentro da pasta `src/questions`, onde há uma pasta para cada questão, com suas funcionalidades divididas entre arquivos `js` dedicados + um arquivo de teste unitário.

Também criei um arquivo de utilitários em `src/utils`.

## Iniciando a aplicação

Antes de iniciar a aplicação pela primeira vez, é necessário instalar as dependências com `npm install` através do terminal.

Para inicializar a aplicação, utilize o comando `npm start`.

Após o início, a aplicação solicitará - através do próprio terminal - que informe qual questão do desafio você deseja rodar. Ao escolher, o algorítmo do desafio será executado e você poderá fornecer os "inputs" necessários para validar os retornos.

![example code](https://res.cloudinary.com/db0rqvv3m/image/upload/v1584306882/ezgif.com-gif-maker_pbbv2t.gif)

## Testes unitários

Estou utilizando o `jest` para os testes unitários. Há 2 testes para cada questão do desafio, validando os principais retornos. Para executar os testes, basta executar o comando `npm run test` no terminal.
