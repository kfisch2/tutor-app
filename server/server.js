const express = require("express");

const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
// create Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// New instance of Apollo server with GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
};

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http:localhost:${PORT}${server.graphqlPath}`)
  });
});

startApolloServer(typeDefs, resolvers)
