import fastify from "fastify";

const app = fastify();

app.get("/home", async (request, response) => {
  response.send({ status: "Ai zé da manga!" }).send();
});

app.get("/end", async (request, response) => {
  response.send(200).send({ status: "Ai zé do alho!" });
});

app
  .listen({
    host: "0.0.0.0",
    port: 3001,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
