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
const UpdateAppartement = ( async(req,res)=>{

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










    // const {appartement} = req.body;
    // if(appartement){
    //     try {
    //         const newCategorie = await db.updateOne({appartement},{where:{id}})
    //         res.status(200).send({message:"update  success"})
    //     } catch (error) {
    //         res.status(400)
    //         throw new Error(error)
    //     }
    // }else{
    //     res.status(400)
    //     throw new Error("Please add a text field")
    // }


















        // const { New_Name_appartement, New_Nb_etage, New_ville, New_prix, New_address } = req.body;
        // if (!New_Name_appartement || !New_Nb_etage || !New_ville || !New_prix || !New_address) {
        //     res.status(400).send('Please fill all fields.')
        // }
        
        // await db.updateOne(
        //     {
        //         Name_appartement: New_Name_appartement,
        //         Nb_etage: New_Nb_etage,
        //         ville: New_ville,
        //         prix: New_prix,
        //         address: New_address,
        //     },
        //     {
        //         where: { Name_appartement: New_Name_appartement },
        //     }
           
        // );
        // console.log("yes")
    

module.exports = {
    CreationAppartement,
    UpdateAppartement
}