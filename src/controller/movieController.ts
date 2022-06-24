/* beautify ignore:start */
import { Request, Response } from "express";
import { movieModel} from "../model/movie";
import Logger from "../../config/logger";
/* beautify ignore:end */

export class CreateMovie {

    static async movieCapt(req: Request, res: Response) {
        try {
            const data = req.body;
            const movie = await movieModel.create(data);
            return res.status(201).json('Filme cadastrado com sucesso');



        } catch (e: any) {
            Logger.error(`Erro no cadastro - Rota - movieCapt:${e.message}`);
            return res.status(500).json({
                Erro: 'Por favor, tente mais tarde'
            })
        }

    };
}