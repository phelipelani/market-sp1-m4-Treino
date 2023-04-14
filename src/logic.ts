import { Request, Response } from "express";
import { iJogador, iJogadores, tJogadorRequest, tJogadorUpdate } from "./interfaces";
import { dbJogadores } from "./db";
const jogadores: iJogador[] = [];
let nextId: number = 1;
const idCount = (): number => {
  const newId = nextId;
  nextId++;
  return newId;
};

const createJogador = (req: Request, res: Response): Response => {
  const jogadorReq: tJogadorRequest[] = req.body;
  const listJogador: iJogador[] = jogadorReq.map((jogador) => {
    const jogadorRes: iJogador = {
      id: idCount(),
      ...jogador,
      gols: 5,
    };
    dbJogadores.push(jogadorRes);
    return jogadorRes;
  });

  return res.status(200).json(listJogador);
};

const renderAllJogadores = (req: Request, res: Response): Response => {
  const totaldeGols: number = dbJogadores.reduce(
    (acc, jog) => acc + jog.gols,
    0
  );
  const markets: iJogadores = {
    totalGols: totaldeGols,
    jogadores: [...dbJogadores],
  };
  return res.json(markets);
};

const editJogador = (req: Request, res: Response): Response => {
    const findIndex = res.locals.JogadorIndex.jogadorIndex
    const jogadorAtual:iJogador = dbJogadores[findIndex]
    const newJogador:tJogadorUpdate = req.body
   const updateJogador:iJogador = {
    ...jogadorAtual,
    ...newJogador,
   }
   dbJogadores[findIndex] = updateJogador
  return res.status(201).json(updateJogador);
};

export { createJogador, renderAllJogadores };
