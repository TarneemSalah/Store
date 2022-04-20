import { Router} from "express";
import * as controllers from "../../controllers/product.controller"
import verifyToken from "../../middleware/error.middleware";

const routes = Router();
//CRUD endpoints for product model
routes.route('/').get(controllers.getAllProducts).post(verifyToken,controllers.createProduct);
routes.route('/:id')
.get(controllers.getOneProduct)
.patch(verifyToken,controllers.UpdateProduct)
.delete(verifyToken,controllers.DeleteProduct);

export default routes;