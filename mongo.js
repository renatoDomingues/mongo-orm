
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose
    //.connect('mongodb://localhost/mongo-orm', {useMongoClient: true})
    .connect('mongodb+srv://mongo-orm:mongo-orm@mongo-orm.ix1gq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const PessoaSchema = mongoose.Schema({
            nome: String,
            cargo: String
        })
        const Pessoa = mongoose.model('Pessoa', PessoaSchema)
        const renato = new Pessoa({nome: 'Renato Domingues', cargo: 'CTO'})
        renato.save( () => console.log('salvo'))
/*
        Pessoa.find({}, (err, docs)=>{
            console.log(docs)
        })

        Pessoa.remove({
            _id: ''
        }, (err, res)=>console.log('ok'))
*/
    })