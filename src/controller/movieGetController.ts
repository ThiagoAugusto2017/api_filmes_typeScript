/* beautify ignore:start */
import { Request, Response } from "express";
import { movieModel} from "../model/movie";
import Logger from "../../config/logger";
/* beautify ignore:end */

export class GetMovie {

    static async moviePadrao(req: Request, res: Response) {

        res.status(200).send("ola Deus")

    };


    static async movieSelection(req: Request, res: Response) {
        try {
            const id = req.params.id;
            console.log(id)
            const movie = await movieModel.findById(id);
            console.log(movie)

            if (!movie) {
                return res.status(404).send(`Movie not found`)
            }

            return res.status(200).send(movie)

        } catch (e: any) {
            Logger.error(`Erro no GET - Rota - Movie:${e.message}`);
            return res.status(500).json({
                Erro: 'Por favor, tente mais tarde'
            })
        }
    }

    static async movieAll(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const movie = await movieModel.find()

            // if (!movie) {
            //     return res.status(404).send(`Movie not found`)
            // }

            return res.status(200).json(movie);

        } catch (e: any) {
            Logger.error(`Erro no GET - Rota - movieAll:${e.message}`);
            return res.status(500).json({
                Erro: 'Por favor, tente mais tarde'
            })
        }
    }
}