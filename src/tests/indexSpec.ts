

import supertest from "supertest";
import app from "../index"

const Request = supertest(app);
 describe('test basic server',()=>{
     it ('Get the / endpoint',async()=>{
         const response = await Request.get('/');
         expect(response.status).toBe(200);
        
 });
  } );