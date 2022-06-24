  /* beautify ignore:start */
import {Router,Request,Response} from 'express';
import { CreateMovie } from '../controller/movieController';
import { validate } from '../middleware/handleValidation';
import { movieCreateValidation } from '../middleware/movieValidation';
import { GetMovie } from '../controller/movieGetController';
import { DestroyMovie } from '../controller/moviedestroyController';
import {  EditMovie} from '../controller/movieEditController';
/* beautify ignore:end */

  const router = Router()

  router.get('/api/', GetMovie.moviePadrao);
  router.get('/api/movie/select/:id', GetMovie.movieSelection);
  router.get('/api/movie/all', GetMovie.movieAll);

  router.post('/api/', movieCreateValidation(), validate, CreateMovie.movieCapt);
  router.delete('/api/movie/destroy/:id', DestroyMovie.destroyMovieEspecification);
  router.patch('/api/movie/up/:id', movieCreateValidation(), validate, EditMovie.movieEdit);



  export default router