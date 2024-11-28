import Server from "./server/server.js";
import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
dotenv.config();

const server = new Server();

server.listen();