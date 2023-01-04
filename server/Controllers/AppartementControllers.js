const db = require("../Models/appartement")

const craeteAppartement=(req,res) =>{
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

const updateAppartement = ( async(req,res)=>{

        const {Name_appartement, Nb_etage, ville, prix, address } = req.body
        const id =  req.params.id;
    
        try {
            // functin update produit
            const updateAppartement = await db.findOne({where:{id:id}})
    
            if(updateAppartement){
                updateAppartement.Name_appartement = Name_appartement
                updateAppartement.Nb_etage = Nb_etage
                updateAppartement.ville = ville
                updateAppartement.prix = prix
                updateAppartement.address = address
              
                updateAppartement.save()
                
                res.status(200).send('update  success')
            }
        } catch (error) {
                res.status(400)
                throw new Error(error)
            }
    })

const deleteAppartement = (async (req, res) => {
        const id =  req.params.id;
        try {
            const deleteAppartement = await db.deleteOne({where:{id}})
            return  res.status(200).json({message:"delete success"})
            
        } catch (err) {
            // console.log(err)
            return  res.status(400).json({message:"Not delet code promo"})
        }  
    })
    
module.exports = {
    craeteAppartement,
    updateAppartement,
    deleteAppartement
}