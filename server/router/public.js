const router = require("koa-router")();
const db = require('../db/index')


//删除接口
module.exports = router.del("/:db/api/:table/:id", async ctx => {
  let result = {success: false, msg: "", data: null } 
  let params = ctx.params
  let obj=await db.remove(params.db,params.table,params.id)
  if(obj.value){
    result.success=true
    result.msg="删除成功"
  }else{
    result.msg="删除失败"
  }
  result.data = obj.value
  ctx.body = result
})

//通过id找对象
module.exports = router.get("/:db/api/:table/:id", async ctx => {
  let result = {success: false, msg: "", data: null } 
  let params = ctx.params
  let obj=await db.findId(params.db,params.table,params.id)
  if(obj){
    result.success=true,
    result.msg=obj.length?"查询成功":"找不到数据"
    result.data = obj
  }else{
    result.msg="查询失败"
  }
  ctx.body = result
})

//修改
