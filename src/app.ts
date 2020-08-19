import express from 'express';

const app = express();

app.get('/', (req, res) => res.status(200).send('Hex server'));

export default app;