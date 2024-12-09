const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);

        // Coloque sua connection string diretamente aqui para testar
        await mongoose.connect(
            'mongodb+srv://thalit:teste123@cluster0.pgwnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log('Conectado ao banco');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;
