import middleware from '../../../middleware/all'
import nc from 'next-connect'
import onError from '../../../middleware/error'
import { folder } from '../../../db'
import { Request } from '../../../types'

const handler = nc({
  onError,
})

handler.use(middleware)

handler.post(async (req: Request, res) => {
  const newFolder = await folder.createFolder(req.db, {
    createdBy: req.user.id,
    name: req.body.name,
  })
  res.send({ data: newFolder })
})

export default handler
