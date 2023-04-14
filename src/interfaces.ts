interface iJogador{
    id:number
    name:string
    posição:string
    gols:number
}

type tJogadorRequest = Omit<iJogador,"id , gols">

export{iJogador, tJogadorRequest}