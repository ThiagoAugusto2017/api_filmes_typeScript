/* beautify ignore:start */
import { Request, Response } from "express";
import { movieModel} from "../model/movie";
import Logger from "../../config/logger";
/* beautify ignore:end */

export class DestroyMovie {

    static async destroyMovieEspecification(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const movie = await movieModel.findByIdAndDelete(id);
            if (!movie) {
                return res.status(404).send(`Filme ja excuido ou nao consta na lista de filmes ativos`)
            }
            return res.status(200).send('Filme excluido com sucesso')

        } catch (e: any) {
            Logger.error(`Erro no Delet - Rota - Movie:${e.message}`);
            return res.status(500).json({
                Erro: 'Por favor, tente mais tarde'
            })
        }

    }
}