import { NextFunction, Request, Response } from "express";
import { dbJogadores } from "./db";

const VerificaId = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const id = parseInt(req.params.id);
  const findIndex = dbJogadores.findIndex((index)=> index.id === id)
  if(findIndex == -1){
    return res.status(404).json({"error":"Jogador não encontrado"})
  
  }
  res.locals.JogadorIndex = {
    jogadorIndex: findIndex,
  };
  return next()
};

export default VerificaId
