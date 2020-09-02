# JS CLI filtrando arquivos de um diretório.
 Listando arquivos de um diretório a partir do nome ou extensão com JavaScript

## Como utilizar

Após instalar o NodeJS LTS 12+ e realizar o clone neste repositório, pelo terminal digite:

```
npm install
node index.js --help
```

Que, além de instalar as dependências necessárias, irá resultar na lista básica de comandos para utilizar a aplicação:

```
Usage: index [options]

Options:
  -V, --version          output the version number
  -d, --diretorio <dir>  nome de diretório (ex: 'caminho/para/diretorio/') (default: "./mocks")
  -t, --tipo <tipo>      se é por nome ou por extensão que vai ser filtrado (ex: 'nome' ou 'extensao')
                         (default: "nome")
  -f, --filtro <filtro>  o nome ou extensão de filtro (ex: 'txt' ou 'nomearquivo') (default: "txt")
  -dbg, --debug          Debuggar parametros
  -h, --help             display help for command
```

O uso de valores padrões para os comandos visa facilitar o uso, mas uma chamada de exemplo é:

```
node index.js --tipo extensao --filtro txt

> Output:
arquivo copy 3.txt
arquivo copy.txt
arquivo.txt
```
