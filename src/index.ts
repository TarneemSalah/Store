import express, { Application ,Request,Response} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
const PORT =4000;

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


app.get('/',(_req: Request,res: Response)=> {
 res.json({
     message:'hello',
 });
});


app.listen(PORT, () => console.log(`server is starting at port:${PORT}`));
export default app;