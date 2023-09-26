const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

//data parser - used to parse data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Musical Production API",
            version: "1.0.0"
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /musicals:
 *    get:
 *      description: Get all musicals from the list
 *      responses:
 *        200:
 *          description: Success
 */

app.get('/musicals', (req, res) => {
    res.send([
        {
            id: 0,
            title: "Hamilton",
            music: "Lin-Manuel Miranda",
            lyrics: "Lin-Manuel Miranda",
            book: "Lin-Manuel Miranda"
        },
        {
            id: 1,
            title: "Rent",
            music: "Jonathan Larson",
            lyrics: "Jonathan Larson",
            book: "Jonathan Larson"
        }
    ]);
});

/**
 * @swagger
 * /musical:
 *    post:
 *      description: Get one musical from the list
 *      parameters:
 *      - name: title
 *        description: Musical title
 *        in: body
 *        required: true
 *        type: string
 *      responses:
 *        200:
 *          description: Success
 * 
 */

app.post('/musical', (req, res) => {
    const title = req.body.title;
    res.send({ title});
});

app.listen(4000, () => {
    console.log("Running on port 4000");
});