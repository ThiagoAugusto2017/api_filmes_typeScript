import 'dotenv/config'


export default {
    port: process.env.PORT,
    dbUri: `mongodb+srv://${process.env.USER_BANCO}:${process.env.SENHA_BANCO}@cluster0.x67qd.mongodb.net/${process.env.BANCO_DADOS}?retryWrites=true&w=majority`,
    env: "development",



}