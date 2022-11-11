import { Router } from "express";
import rotasDeInquilinos from "./Inquilino";
import rotasDeLocador from "./Locador";
import rotasDeLogin from "./Login";
import rotasDePaginaAnuncios from "./Anuncios";

const router = Router();

router.use('/inquilinos', rotasDeInquilinos);
router.use('/locadores', rotasDeLocador);
router.use('/login', rotasDeLogin);
router.use('/anuncios', rotasDePaginaAnuncios);



export default router;