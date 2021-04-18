import Router from 'express'
import PostController from './PostController.js'
/* ================================================================= */
// int points
const router = new Router()
// создаем для всех постов
router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll) // получения
router.get('/posts/:id', PostController.getOne) // получения  по ID
router.put('/posts', PostController.update)  // для обновления  поста
router.delete('/posts/:id', PostController.delete) // удаления  по ID

export default router