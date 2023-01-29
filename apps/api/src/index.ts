import http from 'http';

import app from './app';

const server = http.createServer(app);

server.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3001');
});
