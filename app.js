const express = require('express');
const { db } = require('./utils/database');
const { usersRouter } = require('./routes/users.routes');
const { RepairsRouter } = require('./routes/repairs.routes');


const app = express();

app.use(express.json());

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', RepairsRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});