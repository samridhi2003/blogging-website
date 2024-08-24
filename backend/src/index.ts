import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

app.use('/api/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

// app.use('/api/v1/blog/*', async (c, next)=>{
//   const header= c.req.header("Authorization");
//   if(!header){
//     c.status(401);
//     return c.json({error: "unauthorized"});
//     }
//     const token= header.split(' ')[1];
//     const payload= await verify(token, c.env.JWT_SECRET);
//     if(!payload){
//       c.status(401);
//       return c.json({error:"unauthorized"});
//     }
//     c.set( payload.id);
//     await next()
//   })



export default app
