import fs from 'fs';
import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

//  Vars
const port: number = 5000;

//  Inst
const prisma = new PrismaClient();
const app: express.Application = express();

if (false) {  //  From before Prisma
  //  Middleware
}

//  Set Run Mode
enum runModes {
  expressPrisma = "expressPrisma",
  util = "util"
};
const runMode = runModes.expressPrisma;

//  Announce
console.log(`Running in ${runMode}`);

if (<string>runMode == runModes.expressPrisma) {  // Express & Prisma
  //  Middleware
  app.use(cors());  //  enable CORS w/ various options
                    //  https://github.com/expressjs/cors/
  app.use(express.json());  //  Allows parsing incoming body as JSON

  async function main() {
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    });

    console.log("all users");
    console.dir(allUsers, { depth: null });
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });

  //  Routes
  //    Example with base setup
  app.post('/user/:id/profile', async (req: express.Request, res: express.Response) => {
    console.log("inside of app post /user/:id/profile");
    console.log(req);
    const { id } = req.params;
    console.log("id");
    console.log(id);
    console.log("req.params");
    console.log(req.params);
    console.log("req.body");
    console.log(req.body);
    console.log("atttempting to inst bio");
    const { bio } = req.body;

    const profile = await prisma.profile.create({
      data: {
        bio,
        user: {
          connect: {
            id: Number(id)
          }
        }
      }
    });

    res.json(profile);
  });

  // //    Example of Structuring
  // app.get('/feed', async (req: express.Request, res: express.Response) => {
  //   try {
  //     console.log(req);
  //     if (req.body.action == "init") {
  //       //  do here
  //     }
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       console.error(error);
  //     }
  //     else {
  //       console.log('error, was not instance of Error');
  //     }
  //   }
  // });

  // Listen
  app.listen(port, () => {
    console.log(`server has started on port ${port}`);
  });
}


if (<string>runMode == runModes.util) { //  Util - Run commands w/ Prisma without activating API
  //  Prisma alone
  async function main() {
    //  ... Prisma Client queries here
    // const allUsers = await prisma.user.findMany();
  }

  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}
