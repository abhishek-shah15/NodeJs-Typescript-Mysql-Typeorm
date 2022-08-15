import * as express from "express";
import "reflect-metadata";
import { Request, Response } from "express";
import { createConnection, createQueryBuilder, getRepository } from "typeorm";
import { User } from "./entity/User";
import { Address } from "./entity/Address";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);
    const addressRepository = connection.getRepository(Address);

    // create and setup express app
    const app = express();
    app.use(express.json());

    // User Routes
    app.get("/users", async function (req: Request, res: Response) {
        const users = await getRepository(User).createQueryBuilder("user")
            .leftJoinAndSelect("user.address", "address")
            .getMany();
        res.json(users);
    });

    app.post("/users", async function (req: Request, res: Response) {
        // First Save Address Data
        const addressData = addressRepository.create(req.body);
        const addressResult = await addressRepository.save(addressData);

        // Based on Address Id save user's data
        let user = await userRepository.create(req.body);
        user['address'] = addressResult['id'];
        const results = await userRepository.save(user);

        return res.send(results);
    });


    // start express server
    console.log("App is started on 3036 Port");
    app.listen(3036);
});