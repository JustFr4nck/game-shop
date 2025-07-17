const mongoose = require('mongoose');


const gameSchema = new mongoose.Schema({

    name: { type: String, required: true},
    price: { type: Number, required: true, min: 1, max: 999 },
    forMinors: { type: Boolean, required: true},
    quantity: {type: Number, required: true, min:1, max:30}

});

//Creating model


const gameModel = mongoose.model('Game', gameSchema);


//Creating model
const insertManyDocs = async () => {


    try {
        //Creating document
        const g1 = new gameModel({

            name: "Super Mario World",
            price: 90,
            forMinors: true,
            quantity: 10
        });
         const g2 = new gameModel({

            name: "GTA V",
            price: 20,
            forMinors: false,
            quantity: 20
        });
         const g3 = new gameModel({

            name: "Super Mario Party(switch)",
            price: 40,
            forMinors: true,
            quantity: 13
        });
         const g4 = new gameModel({

            name: "Super Smash bros ultimate",
            price: 50,
            forMinors: true,
            quantity: 7
        });
         const g5 = new gameModel({

            name: "Pokemon Bianco 2",
            price: 15,
            forMinors: true,
            quantity: 23
        });
        const result = await gameModel.insertMany([g1, g2, g3, g4, g5]);

    } catch (error) {
        console.log(error);
    }
};


module.exports = insertManyDocs;