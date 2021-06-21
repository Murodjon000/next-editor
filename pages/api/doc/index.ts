import middleware from '../../../middleware/all'
import nc from 'next-connect'
import onError from '../../../middleware/error'
import { doc } from '../../../db'
import { Request } from '../../../types'

const handler = nc({
  onError,
})

handler.use(middleware)

handler.post(async (req: Request, res) => {
  const newDoc = await doc.createDoc(req.db, {
    createdBy: req.user.id,
    ...req.body,
  })
  res.send({ data: newDoc })
})

export default handler
