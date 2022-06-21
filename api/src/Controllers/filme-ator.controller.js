const FilmeAtorService = require("../Services/filme-ator.service");



exports.createFilmeAtor = (req, res) => {
  FilmeAtorService.createFilmeAtor(req.body, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};
