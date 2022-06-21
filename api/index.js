const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

const userRoutes = require("./src/Routes/user.route");
const filmeRoutes = require("./src/Routes/filme.route");
const receitaRoutes = require("./src/Routes/receita.route");
const atorRoutes = require("./src/Routes/ator.route");
const filmeAtorRoutes = require("./src/Routes/filme-ator.route");
app.use("/api/users", userRoutes);
app.use("/api/filmes", filmeRoutes);
app.use("/api/receitas", receitaRoutes);
app.use("/api/atores", atorRoutes);
app.use("/api/filme-ator", filmeAtorRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "INF-21-DW2-G23",
    version: "1.0.0",
    description: "Api with basic authentication for DW2",
    contact: { name: "Ana Raquel Melo" },
  },
  servers: [{ url: "http://localhost:" + port }],
  components: {
    securitySchemes: {
      basicAuth: { type: "http", scheme: "basic" },
    },
  },
  security: [{ basicAuth: [] }],
};
const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
