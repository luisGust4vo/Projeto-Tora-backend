import  express  from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());
app.use(routes);
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

export default app;