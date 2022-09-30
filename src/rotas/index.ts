import { Router } from "express";
import routerCadastroInquilino from "./cadastroInquilino";
import routerCadastroLocador from "./cadastroLocador";
import routerLogin from "./login";
import routerPaginaAnuncios from "./paginaAnuncios";

const router = Router();

router.use('/cadastroInquilino', routerCadastroInquilino);
router.use('/cadastroLocador', routerCadastroLocador);
router.use('/login', routerLogin);
router.use('/paginaAnuncios', routerPaginaAnuncios);



export default router;