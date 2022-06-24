/* beautify ignore:start */
import { Request, Response } from "express";
import { movieModel} from "../model/movie";
import Logger from "../../config/logger";
/* beautify ignore:end */

export class EditMovie {

    static async movieEdit(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data = req.body;

            const movie = await movieModel.findByIdAndUpdate(id, data);


            if (!movie) {
                return res.status(404).json(`Filme nao encontrado`)
            }

            return res.status(200).json('Filme atualizado')

        } catch (e: any) {
            Logger.error(`Erro no patch - Rota - Movie:${e.message}`);
            return res.status(500).json({
                Erro: 'Por favor, tente mais tarde'
            })
        }
    }

}