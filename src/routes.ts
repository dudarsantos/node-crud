import { UpdatePlanetController } from './controllers/UpdatePlanetController';
import { DeletePlanetController } from './controllers/DeletePlanetController';
import { CreatePlanetController } from './controllers/CreatePlanetController';
import { GetAllPlanetsController } from './controllers/GetAllPlanetsController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { Router } from "express";

const routes = Router();

routes.use(ensureAuthenticated);

routes.post("/planetas", new CreatePlanetController().handle);
routes.get("/planetas", new GetAllPlanetsController().handle);
routes.delete("/planetas/:id", new DeletePlanetController().handle);
routes.put("/planetas/:id", new UpdatePlanetController().handlee );

routes.post("/auth", new AuthenticateUserController().handle);
export { routes };