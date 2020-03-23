import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({
    "evento": "SemanaOmniStack",
    "aluno": "Gustavo Roberto de Souza"
  })
})

app.listen(3333);