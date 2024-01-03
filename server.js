var cors = require('cors')
const express = require("express");
const app = express();

var corsOptions = {
  origin: 'https://tap-gui.app.h2o-2-21094.h2o.vmware.com',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("A new message111");
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/api", (req, res) => {
  res.json(apis)
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

const apis = {
  "openapi": "3.0.2",
  "info": {
    "version": "1.0.0",
    "title": "test"
  },
  "paths": {
    "/health": {
      "get": {
        "operationId": "getHealth",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        }
      }
    },
    "/api": {
      "get": {
        "operationId": "getApi",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                }
              }
            }
          }
        }
      }
    }
  }
}