"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
//  Vars
const port = 5000;
//  Inst
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
if (false) { //  From before Prisma
    //  Middleware
}
//  Set Run Mode
var runModes;
(function (runModes) {
    runModes["expressPrisma"] = "expressPrisma";
    runModes["util"] = "util";
})(runModes || (runModes = {}));
;
const runMode = runModes.expressPrisma;
//  Announce
console.log(`Running in ${runMode}`);
if (runMode == runModes.expressPrisma) { // Express & Prisma
    //  Middleware
    app.use((0, cors_1.default)()); //  enable CORS w/ various options
    //  https://github.com/expressjs/cors/
    app.use(express_1.default.json()); //  Allows parsing incoming body as JSON
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            const allUsers = yield prisma.user.findMany({
                include: {
                    posts: true,
                    profile: true,
                },
            });
            console.log("all users");
            console.dir(allUsers, { depth: null });
        });
    }
    main()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.$disconnect();
    }))
        .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }));
    //  Routes
    //    Example with base setup
    app.post('/user/:id/profile', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const profile = yield prisma.profile.create({
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
    }));
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
if (runMode == runModes.util) { //  Util - Run commands w/ Prisma without activating API
    //  Prisma alone
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            //  ... Prisma Client queries here
            // const allUsers = await prisma.user.findMany();
        });
    }
    main()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma.$disconnect();
    }))
        .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
        console.error(e);
        yield prisma.$disconnect();
        process.exit(1);
    }));
}
