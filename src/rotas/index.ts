import { Router } from "express";
import rotasDeInquilinos from "./Inquilinos";
import rotasDeLocador from "./Locadores";
import rotasDeLogin from "./login";
import rotasDePaginaAnuncios from "./Anuncios";

const router = Router();

router.use('/inquilinos', rotasDeInquilinos);
router.use('/locadores', rotasDeLocador);
router.use('/login', rotasDeLogin);
router.use('/anuncios', rotasDePaginaAnuncios);



export default router;