import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { CreateVideoController } from './controllers/CreateVideoController';
import { GetAllVideosController } from './controllers/GetAllVideosController';
import { Router } from "express";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handlee );

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };