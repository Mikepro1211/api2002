const Cantante =  require('../models/cantantes');

//list all items
exports.list = async(req, res) =>{
    try{
    const cantante = await Cantante.find({});
    res.json(cantante);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};
exports.show = async(req, res) =>{
    try{
        const cantante = await Cantante.findOne({id: req.params.id});
        if(!cantante){
            res.status(404).json({message: "Item not finded"});
        }
        res.json(stadium);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};
//tercera parte 
exports.add = async(req, res) =>{
    const cantante = new Cantante(req.body);
    try{
        await cantante.save();
        res.json({message: "Added new cantante"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};
exports.update = async (req, res, next) =>{
    try{
        const cantante = await Cantante.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Updated singer"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};
exports.delete = async (req, res, next) =>{
    try{
        const cantante = await Cantante.findByIdAndRemove({album: req.params.album});
        res.json({message: "Deleted singer"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El Cliente no existe"});
        next();
    }
};
