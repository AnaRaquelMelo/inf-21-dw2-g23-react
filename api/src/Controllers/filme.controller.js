const FilmeService = require("../Services/filme.service");

exports.getFilmes = (req, res) => {
  FilmeService.getAll((err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};

exports.getFilmeById = (req, res) => {
  FilmeService.getById(+req.params.id, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};

exports.getFilmeReceitas = (req, res) => {
  FilmeService.getFilmeReceitas(+req.params.id, (err, result) => {
    if (err) res.send(err);
    console.log(result);
    res.send(result);
  });
};

exports.getFilmeAtores = (req, res) => {
  FilmeService.getFilmeAtores(+req.params.id, (err, result) => {
    if (err) res.send(err);
    console.log(result);
    res.send(result);
  });
};

exports.createFilme = (req, res) => {
  FilmeService.createFilme(req.body, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};

exports.deleteFilme = (req, res) => {
  FilmeService.deleteFilme(+req.params.id, (err, result) => {
    if (err) res.send(err);

    res.send({ result });
  });
};

exports.updateFilme = (req, res) => {
  FilmeService.updateFilme(+req.params.id, req.body, (err, result) => {
    if (err) res.send(err);

    res.send({ result });
  });
};
