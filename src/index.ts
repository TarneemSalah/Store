import express, { Application ,Request,Response} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import errormiddleware from './middleware/error.middleware';
import config from "./config"
import db from './database';
console.log(config);


const PORT =config.port || 4000;

const app:Application = express();
 
app.use(morgan('common'));
app.use(helmet());
app.use(express.json());
app.use(rateLimit({
	windowMs:  60 * 1000, // 15 minutes
	max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message:'to many requests',
})
);

app.use((_req:Request, res:Response)=>{
res.status(404).json({
    message: 'read the api doc to find ur way',
});
}
);

app.use(errormiddleware);

app.get('/',(_req: Request,res: Response)=> {
    throw new Error('Error'),
    res.json({
      message:'hello',
 });
});
app.post('/',(req: Request,res: Response)=> {
    res.json({
        message:'hello from post',
        data: req.body,
    });
   });




   //test db
db. connect (). then((client) => {
return client
  .query ('SELECT NOw()')
  .then((res) => {
client. release();
console. log(res.rows);
  })
.catch((err) => {
  client. release();
  console. log(err. stack);

});
});

app.listen(PORT, () => console.log(`server is starting at port:${PORT}`));
export default app;