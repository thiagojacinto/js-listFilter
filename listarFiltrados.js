const { promises: fs } = require("fs");
/**
 *  Função que imprima uma lista de arquivos filtrados por suas extensões ou por seus nomes em um dado diretório.
 
Você irá receber 3 parâmetros:
1 - nome de diretório (ex: 'caminho/para/diretorio/')
2 - se é por nome ou por extensão que vai ser filtrado (ex: 'nome' ou 'extensao')
3 - o nome ou extensão de filtro (ex: 'txt' ou 'nomearquivo')
 
Se o filtro for por extensão, deverão ser listados apenas os arquivos referentes a essa extensão.
Se o filtro for por nome, deverão ser listados apenas os arquivos com esse nome (com qualquer extensão).
 
A lista de arquivos deve ser impressa no console, um arquivo por linha.
 * @param {*} diretorio 
 * @param {*} tipo 
 * @param {*} filtro 
 */
async function imprimirListaDeArquivos(diretorio, tipo, filtro) {
  let resultado = [];
  let leituraDiretorio = await fs.readdir(diretorio);

  for (let arquivo of leituraDiretorio) {
    if (tipo === "extensao") {
      const arquivoSeparado = arquivo.split(".");
      let extensao = arquivoSeparado[arquivoSeparado.length - 1];

      if (extensao == filtro) {
        console.log(arquivo);
        resultado.push(arquivo);
      }
    } else {
      const nomeDoArquivo = arquivo.substring(0, arquivo.lastIndexOf("."));

      if (nomeDoArquivo === filtro) {
        console.log(arquivo);
        resultado.push(arquivo);
      }
    }
  }

  return resultado.length === 0
    ? console.log(`Nenhum resultado encontrado para filtro: ${filtro}`)
    : resultado;
}

module.exports = imprimirListaDeArquivos;
