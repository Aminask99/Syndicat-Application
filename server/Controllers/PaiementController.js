const db = require("../Models/paiement")


const creationPaiement=(req,res) =>{
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
                message: "error not creat paiement"
            })
        })
}

const updatePaiement = ( async(req,res)=>{

    const {Name_Client, date_facteur, date_payment, apartement } = req.body
    const id =  req.params.id;

    try {
        // functin update produit
        const updatePaiements = await db.findOne({where:{id:id}})

        if(updatePaiements){
            updatePaiements.Name_Client = Name_Client
            updatePaiements.date_facteur = date_facteur
            updatePaiements.date_payment = date_payment
            updatePaiements.apartement = apartement
        
            updatePaiements.save()
            
            res.status(200).send('update success')
        }
    } catch (error) {
            res.status(400)
            throw new Error(error)
        }
})

module.exports = {
    creationPaiement,
    updatePaiement
}