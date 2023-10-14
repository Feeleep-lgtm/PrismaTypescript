import { Request, Response } from "express";
import prisma from "../services/prisma";
import { request } from "http";


export const userController = {
    async index(req: Request, res: Response) {
        const users = await prisma.user.findMany();
        return res.json
    },

    async createUser(req: Request, res: Response) {
        const userData = req.body;
        const user = await prisma.user.create({
            data: {
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email
            }
        })
        
    }
}