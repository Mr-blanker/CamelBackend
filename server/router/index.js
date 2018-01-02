const router = require('koa-router')()
const public = require('./public')
const test = require('./test')

router.use('', test.routes(), test.allowedMethods())
router.use('', public.routes(), public.allowedMethods())

module.exports = router