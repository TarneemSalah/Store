import express, { Application ,Request,Response} from 'express';
const PORT =4000;

const app:Application = express();
 
app.get('/',(_req: Request,res: Response)=> {
 res.json({
     message:'hello',
 });
});


app.listen(PORT, () => console.log(`server is starting at port:${PORT}`));
export default app;