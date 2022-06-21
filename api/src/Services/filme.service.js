var dbConn = require("../../Config/db.config");

var Filme = (filme) => {
  (this.id = filme.id),
    (this.title = filme.title),
    (this.release_year = filme.release_year),
    (this.language = filme.language),
    (this.lenght = filme.lenght),
    (this.rating = filme.rating);
};

Filme.getAll = (result) => {
  dbConn.query("SELECT * FROM Filme", (err, res) => {
    if (err) {
      console.log("Error fetching filmes", err);
      result(null, err);
    } else {
      // console.log("Filmes fetched successfuly");
      result(null, res);
    }
  });
};

Filme.getById = (id, result) => {
  dbConn.query("SELECT * FROM Filme WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error fetching filme", err);
      result(null, err);
    } else {
      console.log("Filme fetched successfuly");
      result(null, res);
    }
  });
};

Filme.getFilmeReceitas = (id, result) => {
  dbConn.query("SELECT * FROM Receita WHERE filmeId=?", id, (err, res) => {
    if (err) {
      console.log("Error fetching filme", err);
      result(null, err);
    } else {
      console.log("Filme fetched successfuly");
      result(null, res);
    }
  });
};

Filme.getFilmeAtores = (id, result) => {
  dbConn.query(
    "SELECT a.name, a.artistic_name, a.birth_date FROM FilmeAtor fa join Ator a on fa.atorId = a.id WHERE fa.filmeId=?",
    id,
    (err, res) => {
      if (err) {
        console.log("Error fetching filme", err);
        result(null, err);
      } else {
        console.log("Filme fetched successfuly");
        result(null, res);
      }
    }
  );
};

Filme.createFilme = (filmeData, result) => {
  console.log(filmeData);
  dbConn.query("INSERT INTO Filme SET ?", filmeData, (err, res) => {
    if (err) {
      console.log("Erro ao inserir os dados");
      result(null, err);
    } else {
      console.log("Filme criado com sucesso.");
      result(null, { mensagem: "Filme criado com sucesso." });
    }
  });
};

Filme.updateFilme = (id, filmeData, result) => {
  dbConn.query(
    "UPDATE Filme SET title = ?, release_year =?, language = ?, lenght = ?, rating = ? WHERE id = ?",
    [
      filmeData.title,
      filmeData.release_year,
      filmeData.language,
      filmeData.lenght,
      filmeData.rating,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Erro ao atualizar filme");
        result(null, err);
      } else {
        console.log("Filme atualizado com sucesso");
        result(null, { mensagem: "Filme atualizado com sucesso" });
      }
    }
  );
};

Filme.deleteFilme = (id, result) => {
  dbConn.query("DELETE FROM Filme WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("Erro ao deletar os dados");
      result(null, err);
    } else {
      console.log("Filme deletado com sucesso.");
      result(null, { mensagem: "Filme deletado com sucesso." });
    }
  });
};

module.exports = Filme;
