const prompt = require("prompt-sync")();  /* fait appel au parcket prompt-sync (que j'ai installée) qui permet de entrer des données dans le terminale. */
const fs = require("fs"); /* fait appel à un fichier qui est déjà instalé dans node et qui permet de lire et d'écrire des fichiers. */
const voitures = require("./voitures.json"); /* Lit le fichier et le transforme en tableau */

  /*const données = ()=>{
    const reponse = prompt("Bonjour, voulez-vous enregistrer une voiture ? (oui/non) : ");
    if(reponse === "oui"){ 
        const intermediaire = ()=>{
            const marque = prompt("Quel est la marque de votre voiture ? : ");
            const modele = prompt("Quelle est le modele de la voiture ? : ");
            const immatriculation = prompt("C'est quoi son immatriculation ? : ");
            const moteur = prompt("Sa motorisation est de quelle type ? : ");
            const vitesse = prompt("Quel est sa boîte de vitesse ? : ");  
            voitures.push({
               marque: marque,
               modele: modele,
               immatriculation: immatriculation,
               motorisation: moteur,
               vitesse: vitesse,
            });
            console.log("Votre voiture est enregistrée avec succès !");
            const proposition = prompt("Voulez-vous enregistrer une autre voiture ? oui/non: ");

            if(proposition === "oui"){      
                console.log(marque + "" + modele + "" + immatriculation + "" + moteur + "" + vitesse);
                console.log("Votre voiture est enregistrée avec succès !");
            }
            else if(proposition === "non"){
                console.log("Merci d'avoire utiliser notre service.");
                console.log("voire d'autre option !");
            }   
        }
        
        
    }
    else{
        console.log("Merci d'avoire utiliser notre service.");
        console.log("voire d'autre option !");
        const ajouter = console.log("1.AJOUTER UNE VOITURE ");
        const consulter = console.log("2.CONSULTER LES VOITURES ENREGITRER");
        const rechercher = console.log("3.RECHERCHER UNE VOITURE ");
        const supprimer = console.log("4.SUPPRIMER UNE VOITURE ");  
        const choix = prompt("Veuillez choisir une option (1, 2, 3, 4) : ");
        
        if(choix === "1"){
            console.log(intermediaire());
            console.log("Votre voiture est enregistrée avec succès !")
        }
    }
   
 
    
}

données();  */



const ajouterVoitures = ()=>{
    const marque = prompt("Quel est la marque de votre voiture ? : ");
    const modele = prompt("Quelle est le modele de la voiture ? : ");
    const immatriculation = prompt("C'est quoi son immatriculation ? : ");
    const moteur = prompt("Sa motorisation est de quelle type ? : ");
    const vitesse = prompt("Quel est sa boîte de vitesse ? : ");  
    voitures.push({
        marque: marque,
        modele: modele,
        immatriculation: immatriculation,
        motorisation: moteur,
        vitesse: vitesse,
    });
    console.log("Votre voiture a été enrégistrée avec succès.")
    fs.writeFileSync("./voitures.json", JSON.stringify(voitures)); /* Écrit les données dans le fichier */
};

const intermediaire = ()=>{
    console.log("Option disponible !");
    const ajouter = console.log("1.AJOUTER UNE VOITURE ");
    const consulter = console.log("2.CONSULTER LES VOITURES ENREGITRER");
    const rechercher = console.log("3.RECHERCHER UNE VOITURE ");
    const supprimer = console.log("4.SUPPRIMER UNE VOITURE ");  
    const choix = prompt("Veuillez choisir une option (1, 2, 3, 4) : ");
        
    if(choix === "1"){
        ajouterVoitures();
    }
    else if(choix === "2"){
        console.log(" Liste des voitures enrégistrées: ");
        console.log(voitures);
    }
    else if(choix === "3"){
        const immatriculation = prompt("Veuillez entrer l'immatriculation de la voiture que vous souhaitez rechercher : ");
        const voiture = voitures.find(f => f.immatriculation === immatriculation);
        console.log(voiture);
    }
    else if(choix === "4"){
        const immatriculation = prompt("Veuillez entrer l'immatriculation de la voiture que vous souhaitez rechercher : ");
        const voiture = voitures.find(n => n.immatriculation === immatriculation);
        const position = voitures.findIndex(c => c === voiture);
        const supprimer = voitures.splice(position, 1);
        console.log("La voiture a été supprimée avec succès !");
        console.log(voitures);

    }
    fs.writeFileSync("./voitures.json", JSON.stringify(voitures));
}

const Proposition = ()=>{
    let proposition = prompt("Voulez-vous enregistrer une autre voiture ? oui/non: ");
    while(proposition === "oui"){
        ajouterVoitures();
        proposition = prompt("Voulez-vous enregistrer une autre voiture ? oui/non: ");
    }
    if(proposition === "non"){
        console.log("Merci d'avoire utiliser notre service.");
        intermediaire();
    }   
}


const donnés = ()=>{
    const reponse = prompt("Bonjour, voulez-vous enregistrer une voiture ? (oui/non) : ");
    if(reponse === "oui"){

        ajouterVoitures(); 
        Proposition();  
    }
    else{
        intermediaire();
    }
    fs.writeFileSync("./voitures.json", JSON.stringify(voitures)); /* Écrit les données dans le fichier */
}
donnés();
