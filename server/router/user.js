const router = require("koa-router")();
const db = require('../db/index')


/**
 * 测试
 */

module.exports = router.post("/text", async ctx => {
    let ooo=await db.insert('test',[{'zhenghui':11111,'zhengsf':234234234}])
    ctx.body = ooo
  })

  module.exports = router.delete("/text", async ctx => {
    let ooo=await db.remove('test',"5a4a26a364591e45d83a4e91")
    ctx.body = ooo
  })

  module.exports = router.put("/text", async ctx => {
    let ooo=await db.updata('test',"5a4a26a264591e45d83a4e90",{zhenghui:2222})
    ctx.body = ooo
  })

  module.exports = router.get("/text", async ctx => {
    let ooo=await db.findId('test',"5a4a26a264591e45d83a4e90")
    ctx.body = ooo
  })