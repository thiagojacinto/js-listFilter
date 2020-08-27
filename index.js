const { program } = require("commander");
const listar = require("./listarFiltrados");

program.version("1.0.0");

program
  .option(
    "-d, --diretorio <dir>",
    "nome de diretório (ex: 'caminho/para/diretorio/')",
    "./mocks"
  )
  .option(
    "-t, --tipo <tipo>",
    "se é por nome ou por extensão que vai ser filtrado (ex: 'nome' ou 'extensao')",
    "nome"
  )
  .option(
    "-f, --filtro <filtro>",
    "o nome ou extensão de filtro (ex: 'txt' ou 'nomearquivo')",
    "txt"
  )
  .option("-dbg, --debug", "Debuggar parametros");

program.parse(process.argv);

if (program.debug) {
  console.log(program.opts());
}
// if (program.diretorio) {
//   // console.log(`- dir: ${program.diretorio}`); // DEBUG
// }
if (program.tipo) {
  program.tipo = program.tipo.toLowerCase() === "nome" ? "nome" : "extensao";
  // console.log(`- tipo: ${program.tipo}`); // DEBUG
}
// if (program.filtro) {
//   // console.log(`- filtro: ${program.filtro}`); // DEBUG
// }

listar(program.diretorio, program.tipo, program.filtro);
