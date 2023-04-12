const req = require('supertest');
const { describe, beforeAll, afterAll, test, expect } = require("@jest/globals");
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const { loginUser } = require('./');

const app = express();
app.use(express.json());

app.use('/users/login', loginUser);

describe('insert', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.URL_DB);
        app.listen(3000);
    });

    afterAll(async () => {
      await mongoose.connection.close();
    });
  
    test('test loginUser', async () => {
        const testData = {
            email: '1238@mail.com',
            password: '12345678',
        };

        const res = await req(app).post('/users/login').send(testData);

        expect(res.statusCode).toBe(200);
        expect(res.body.token).toBeDefined();
        expect(typeof res.body.user.email).toBe('string');
        expect(typeof res.body.user.subscription).toBe('string');
    });
});