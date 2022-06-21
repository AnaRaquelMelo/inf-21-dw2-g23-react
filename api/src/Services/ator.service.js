var dbConn = require("../../Config/db.config");

var Ator = (ator) => {
  (this.id = ator.id),
    (this.name = ator.name),
    (this.artistic_name = ator.artistic_name),
    (this.birth_date = ator.birth_date);
};

Ator.getAll = (result) => {
  dbConn.query("SELECT * FROM Ator", (err, res) => {
    if (err) {
      console.log("Error fetching atores", err);
      result(null, err);
    } else {
      // console.log("Atores fetched successfuly");
      result(null, res);
    }
  });
};

Ator.getById = (id, result) => {
  dbConn.query("SELECT * FROM Ator WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error fetching atores", err);
      result(null, err);
    } else {
      console.log("Atores fetched successfuly");
      result(null, res);
    }
  });
};

Ator.createAtor = (atorData, result) => {
  console.log(atorData);
  dbConn.query("INSERT INTO Ator SET ?", atorData, (err, res) => {
    if (err) {
      console.log("Erro ao inserir os dados");
      result(null, err);
    } else {
      console.log("Ator criado com sucesso.");
      result(null, { mensagem: "Ator criado com sucesso." });
    }
  });
};

Ator.updateAtor = (id, atorData, result) => {
  dbConn.query(
    "UPDATE Ator SET name = ?, artistic_name =?, birth_date = ? WHERE id = ?",
    [atorData.name, atorData.artistic_name, atorData.birth_date, id],
    (err, res) => {
      if (err) {
        console.log("Erro ao atualizar ator");
        result(null, err);
      } else {
        console.log("Ator atualizado com sucesso");
        result(null, { mensagem: "Ator atualizado com sucesso" });
      }
    }
  );
};

Ator.deleteAtor = (id, result) => {
  dbConn.query("DELETE FROM Ator WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erro ao deletar os dados");
      result(null, err);
    } else {
      console.log("Ator deletado com sucesso.");
      result(null, { mensagem: "Ator deletado com sucesso." });
    }
  });
};

module.exports = Ator;
