const AtorService = require("../Services/ator.service");

exports.getAtores = (req, res) => {
  AtorService.getAll((err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};

exports.getAtorById = (req, res) => {
  AtorService.getById(+req.params.id, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};

/*exports.getFilmeReceitas = (req, res) => {
    AtorService.getFilmeReceitas(+req.params.id, (err, result) => {  
        if(err) res.send(err);                            
        console.log(result);
        res.send(result)        
    });    
}*/

exports.createAtor = (req, res) => {
  AtorService.createAtor(req.body, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
};

exports.deleteAtor = (req, res) => {
  AtorService.deleteAtor(+req.params.id, (err, result) => {
    if (err) res.send(err);

    res.send({ result });
  });
};

exports.updateAtor = (req, res) => {
  AtorService.updateAtor(+req.params.id, req.body, (err, result) => {
    if (err) res.send(err);

    res.send({ result });
  });
};
