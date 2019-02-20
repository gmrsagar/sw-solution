import Jobs from '../controllers/job';
import Accepteds from '../controllers/accepted';

export default app => {
  app.get('/api', (req, res) => res.status(200).send({ message: 'Welcome to the Jobs API'}));
  app.get('/api/jobs', Jobs.get);
  app.put('/api/jobs/:jobId', Jobs.update);
  app.post('/api/accept/', Accepteds.create);
  app.get('/api/accept', Accepteds.get);
}