const express = require("express");
const mainRouter = require('./routes');
const listsRouter = require('./routes/lists');
const writeRouter = require('./routes/write');

const app = express();


app.use("/lists", listsRouter);
app.use("/write", writeRouter);
app.use("/", mainRouter);

app.use((req, res, next) => {
    res.status(404);
    res.send({
        result: 'fail',
        error: `Page not found ${req.path}`
    });
});

app.use((err, req, res, next) => {
    res.status(500);

    res.json({
        result: 'fail',
        error: err.message,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);