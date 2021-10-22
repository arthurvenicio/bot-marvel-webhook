# WebHook - MarvelBot

A ideia foi construir um bot com dialogflow es que seria de uma loja de quadrinhos, usando como base a [Jim Hanley’s Universe](http://jhucomicbooks.com/) uma loja de quadrinhos localizada em New York;

## Como começar

Primeiro clone este projeto utilizando o:

```bash
git clone git@github.com:arthurvenicio/bot-marvel-webhook.git
```

## Baixe as dependencias do projeto

Depois de fazer o clone entre na pasta do projeto e com o terminal digite o seguinte comando para baixar as dependências necessárias para rodar o projeto:

```bash
cd functions && yarn
```

## Atenção é necessario ter o firebase-cli instalado em sua maquina.

Depois de ter configurado e conectado com um projeto no firebase é hora de rodar localmente com:

```bash
yarn serve
```

é necessario está dentro da pasta functions para rodar este comando!

```
A copia do dialogflow no arquivo .zip deve ser importada para dentro do seu agente e apontada para a rota do seu computador usando o ngrok ou similar, ou function ja com deploy para o firebase.
```
