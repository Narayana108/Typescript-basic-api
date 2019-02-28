import { app } from './app';

const appPort = process.env.APP_PORT || 3000;
const appEnv = process.env.ENV || 'dev';

// Start express server
app.listen(appPort, () => {
  console.log(
    'App is running at http://localhost:%d in %s mode',
    appPort,
    appEnv
  );
  console.log('  Press CTRL-C to stop\n');
});
