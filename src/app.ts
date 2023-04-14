import express,{ Application } from "express"
import { createJogador, renderAllJogadores } from "./logic"
import VerificaId from "./middleware"

const app:Application = express()

app.use(express.json())

app.post("/jogador",createJogador)
app.get("/jogador",renderAllJogadores)
app.patch("/jogador",VerificaId)

app.listen(5000,()=>{
    console.log("Server is running")
})