import express from 'express';
import { Pool } from 'pg';
import bodyParser from 'body-parser';

const app = express();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send('Hex server'))
    .get('/db', async (req, res) => {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM users');
            const results = { 'results': (result) ? result.rows : null};
            res.json({name: results});
            client.release();
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    })

export default app;