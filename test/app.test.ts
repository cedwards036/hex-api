import request from 'supertest';

import app from '../src/app';

describe('App', () => {
    it('renders the root path', () => {
        return request(app).get('/').then(response => {
            expect(response.status).toBe(200);
        });
    });
});