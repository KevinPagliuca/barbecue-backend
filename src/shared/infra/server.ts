import { app } from './app';

const PORT = process.env.PORT || 3333;

app.listen(PORT || 3333, () =>
  console.log(`server is running in PORT ${PORT || 3333} 🔥`)
);
