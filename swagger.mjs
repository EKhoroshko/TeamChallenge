import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerData } from './swaggerData.mjs';

const app = express();

app.use(cors());
// Використовуйте ваші ендпоінти тут

// Додайте документацію Swagger зі swagger.json
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerData));

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// Сервер слухає на порті 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
