var dbConn = require("../../Config/db.config");

var FilmeAtor = (filmeAtor) => {
  (this.id = filmeAtor.id),
    (this.filmeId = filmeAtor.filmeId),
    (this.atorId = filmeAtor.atorId);
};

FilmeAtor.createFilmeAtor = (filmeAtorData, result) => {
  dbConn.query("INSERT INTO FilmeAtor SET ?", filmeAtorData, (err, res) => {
    if (err) {
      console.log("Erro ao inserir os dados");
      result(null, err);
    } else {
      console.log("FilmeAtor criado com sucesso.");
      result(null, { mensagem: "FilmeAtor criado com sucesso." });
    }
  });
};

module.exports = FilmeAtor;
