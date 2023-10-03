const express = require('express');
const soap = require('soap');

const app = express();
const port = 3000;

const soapUrl = 'http://www.dneonline.com/calculator.asmx?wsdl';

app.get('/api/calculator/add', async (req, res) => {
  try {
    const client = await soap.createClientAsync(soapUrl);

    const args = {
      intA: 5,
      intB: 3,
    };

    const result = await client.AddAsync(args);

    res.json({ resultado: result[0].AddResult });
  } catch (error) {
    console.error('Erro ao chamar a API SOAP:', error);
    res.status(500).json({ error: 'Erro ao chamar a API SOAP' });
  }
});

app.get('/api/calculator/subtract', async (req, res) => {
  try {
    const client = await soap.createClientAsync(soapUrl);
    const args = {
      intA: 10,
      intB: 7,
    };

    const result = await client.SubtractAsync(args);

    res.json({ resultado: result[0].SubtractResult });
  } catch (error) {
    console.error('Erro ao chamar a API SOAP:', error);
    res.status(500).json({ error: 'Erro ao chamar a API SOAP' });
  }
});

app.get('/api/calculator/multiply', async (req, res) => {
  try {
    const client = await soap.createClientAsync(soapUrl);
    const args = {
      intA: 4,
      intB: 6,
    };

    const result = await client.MultiplyAsync(args);

    res.json({ resultado: result[0].MultiplyResult });
  } catch (error) {
    console.error('Erro ao chamar a API SOAP:', error);
    res.status(500).json({ error: 'Erro ao chamar a API SOAP' });
  }
});

app.get('/api/calculator/divide', async (req, res) => {
  try {
    const client = await soap.createClientAsync(soapUrl);
    const args = {
      intA: 20,
      intB: 5,
    };

    const result = await client.DivideAsync(args);

    res.json({ resultado: result[0].DivideResult });
  } catch (error) {
    console.error('Erro ao chamar a API SOAP:', error);
    res.status(500).json({ error: 'Erro ao chamar a API SOAP' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
