import { Request, Response, Router } from 'express'
import ResponseMessages from '../../core/utils/constants'

import authRouter from './auth.router'
import managerRouter from './manager.router'
import userRouter from './user.router'

const router = Router()

// router.use(verifyAuthorization)

router.use('/manager', managerRouter)
router.use('/user', userRouter)
router.use('/auth', authRouter)

// not found route
router.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: ResponseMessages.RES_MSG_NOT_FOUND_URL_EN,
  })
})

export default router
