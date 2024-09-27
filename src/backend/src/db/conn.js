const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true)

        await mongoose.connect(
            'mongodb+srv://tfarias:8IsH3wpHI0PqrA3J@cluster0.pgwnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
            console.log('conectado ao banco')
    }catch (error) {
        
        console.log(`Error: ${error}`);
    }

}


module.exports = main;
