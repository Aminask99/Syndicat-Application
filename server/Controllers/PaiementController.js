const db = require("../Models/paiement")


const CreationPaiement=(req,res) =>{
    let Paiement = new db({
        Name_Client: req.body.Name_Client,
        date_facteur: req.body.date_facteur,
        date_payment: req.body.date_payment,
        apartement: req.body.apartement,
    })
    Paiement.save()
        .then(Paiement => {
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
    CreationPaiement
}