interface iJogador {
  id: number;
  name: string;
  posição: string;
  gols: number;
}

type tJogadorRequest = Omit<iJogador, "id" | "gols">;

interface iJogadores {
  totalGols: number;
  jogadores: iJogador[];
}

type tJogadorUpdate = Omit<tJogadorRequest, "name">;
export { iJogador, tJogadorRequest, iJogadores, tJogadorUpdate };
