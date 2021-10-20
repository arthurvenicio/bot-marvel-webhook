"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVerify = void 0;
const firestore_1 = require("../config/firestore");
exports.getVerify = async (req, res, next) => {
    const body = req.body;
    const parametrs = body.queryResult.parameters;
    const name = parametrs.name.name;
    const email = parametrs.email;
    const data = await firestore_1.fs.collection("users").doc(email).get();
    const createUser = (name, email) => {
        firestore_1.fs.collection("users")
            .doc(email)
            .set({
            email: email,
            nome: name,
        })
            .then((doc) => {
            console.log("Create User: ", email);
            return doc;
        })
            .catch((error) => {
            return error;
        });
    };
    if (!data.exists) {
        createUser(name, email);
    }
    try {
        return res.status(201).send({
            followupEventInput: {
                name: "userVerify",
                languageCode: "pt-BR",
                parameters: {
                    name: name,
                    isNew: false,
                    isVerify: true,
                },
            },
        });
    }
    catch (error) {
        return res.status(500).send({
            error: error,
        });
    }
    next();
};
//# sourceMappingURL=marvel.controller.js.map