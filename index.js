const koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = 'Hello World';
})

var port = process.env.PORT || 8888
app.listen(port, function(){
  console.log(`Server is listening on port ${port}`)
})