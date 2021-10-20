import { NextFunction, Request, Response } from "express";

import { fs } from "../config/firestore";
import { RequestDialog } from "../types/dialogflow.types";

export const getVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body: RequestDialog = req.body;

  const parametrs = body.queryResult.parameters;
  const name = parametrs.name.name;
  const email = parametrs.email;

  const data = await fs.collection("users").doc(email).get();

  const createUser = (name: string, email: string) => {
    fs.collection("users")
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
  } catch (error) {
    return res.status(500).send({
      error: error,
    });
  }

  next();
};
