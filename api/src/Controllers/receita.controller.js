const ReceitaService = require('../Services/receita.service');

exports.getReceitas = (req, res) => {
    ReceitaService.getAll((err, result) => {  
        if(err) res.send(err);            
        
        res.send(result)        
    });
}

exports.getReceitaById = (req, res) => {
    ReceitaService.getById(+req.params.id, (err, result) => {  
        if(err) res.send(err);            
        
        res.send(result)        
    });    
}

exports.createReceita = (req, res) => {
    ReceitaService.createReceita(req.body, (err, result) => {
        if(err) res.send(err);

        res.send(result);
    });        
}

exports.deleteReceita = (req, res) => {
    ReceitaService.deleteReceita(+req.params.id, (err, result) => {
        if(err) res.send(err);

        res.send({result});
    });
       
    
}

exports.updateReceita = (req, res) => {
    ReceitaService.updateReceita(+req.params.id, req.body, (err, result) => {
        if(err) res.send(err);

        res.send({result});
    });
       
    
}