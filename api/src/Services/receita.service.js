var dbConn = require("../../Config/db.config");

var Receita = (receita) => {
  (this.id = receita.id),
    (this.pais = receita.pais),
    (this.valor = receita.valor),
    (this.filmeId = receita.filmeId);
};

Receita.getAll = (result) => {
  dbConn.query("SELECT * FROM Receita", (err, res) => {
    if (err) {
      console.log("Error fetching receitas", err);
      result(null, err);
    } else {
      console.log("Receitas fetched successfuly");
      result(null, res);
    }
  });
};

Receita.getById = (id, result) => {
  dbConn.query("SELECT * FROM Receita WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error fetching receita", err);
      result(null, err);
    } else {
      console.log("Receita fetched successfuly");
      result(null, res);
    }
  });
};

Receita.createReceita = (receitaData, result) => {
  dbConn.query("INSERT INTO Receita SET ?", receitaData, (err, res) => {
    if (err) {
      console.log("Erro ao inserir os dados");
      result(null, err);
    } else {
      console.log("Receita criada com sucesso.");
      result(null, { mensagem: "Receita criado com sucesso." });
    }
  });
};

Receita.updateReceita = (id, receitaData, result) => {
  dbConn.query(
    "UPDATE Receita SET pais = ?, valor =?, filmeId = ? WHERE id = ?",
    [receitaData.pais, receitaData.valor, receitaData.filmeId, id],
    (err, res) => {
      if (err) {
        console.log("Erro ao atualizar receita");
        result(null, err);
      } else {
        console.log("Receita atualizada com sucesso");
        result(null, { mensagem: "Receita atualizada com sucesso" });
      }
    }
  );
};

Receita.deleteReceita = (id, result) => {
  dbConn.query("DELETE FROM Receita WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erro ao deletar os dados");
      result(null, err);
    } else {
      console.log("Receita deletada com sucesso.");
      result(null, { mensagem: "Receita deletado com sucesso." });
    }
  });
};

module.exports = Receita;
