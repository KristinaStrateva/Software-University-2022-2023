const express = require('express');

const expressConfigurator = require('./config/expressConfigurator');
const hbsConfigurator = require('./config/hbsConfigurator');
const dbConnect = require('./config/dbConfigurator');
const routes = require('./routes');
const { globalErrorHandler } = require('./middlewares/errorHandlerMiddleware');

const app = express();

const PORT = 3000;

expressConfigurator(app);
hbsConfigurator(app);

dbConnect()
    .then(() => console.log('DB connected successfully!'))
    .catch(err => console.log(`DB Error: ${err}`));

app.use(routes);
app.use(globalErrorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));