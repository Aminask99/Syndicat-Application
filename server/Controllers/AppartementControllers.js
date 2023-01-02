const db = require("../Models/appartement")



const CreationAppartement=(req,res) =>{
    let Appartement = new db({
        Name_appartement: req.body.Name_appartement,
        Nb_etage: req.body.Nb_etage,
        ville: req.body.ville,
        prix: req.body.prix,
        address: req.body.address,
    })
    Appartement.save()
        .then(Appartement => {
            return  res.status(200).json({
                message: 'User Creat '
            });
        })

        .catch(error => {
            return  res.status(400).json({
                message: "error not creat user"
            })
        })
}
module.exports = {
    CreationAppartement
}