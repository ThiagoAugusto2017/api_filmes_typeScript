import {
    body
} from "express-validator";

export const movieCreateValidation = () => {
    return [
        body('title').isString().withMessage('o titulo e obrigatorio').isLength({
            min: 5
        }),
        body('rating').isNumeric().withMessage('A nota precisa se um numero').custom((value: number) => {
            if (value < 0 || value > 10) {
                throw new Error("A nota precisa ser entre 0 a 10")
            }
            return true;
        }),
        body('description').isString().withMessage('A descrição e obrigatoria'),
        body('director').isString().withMessage('O diretor e obrigatorio'),
        body('posters').isURL().withMessage('Precisa ser um link de imagem')

    ]

}