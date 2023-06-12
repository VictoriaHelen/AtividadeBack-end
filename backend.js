const { urlencoded } = require('body-parser');
const express = require('express')
const app = express();
const porta = 3000;



app.use(express.urlencoded({extended:false}));

app.post('/local',(req, res) => {
    const{nomeLocal,endereço,bairro,transporteUtilizado,oQueFazer,nomePessoaProcurar}=req.body;
    
    res.send(`Nome do Local: ${nomeLocal},Endereço: ${endereço},Bairro: ${bairro},Transporte Utilizado: ${transporteUtilizado},O que fazer: ${oQueFazer},Nome da pessoa para procurar: ${nomePessoaProcurar}`);


});
app.listen(porta, () => {
    console.log(`Esta aplicação está escutando na
   porta ${porta}`)
});



