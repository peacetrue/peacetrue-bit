import {ReactAppOptions} from '@teambit/react';
import {localDeployerFactory} from "@peacetrue/common.deployers.local-factory";

export const ReactApp: ReactAppOptions = {
  name: 'react-app',
  entry: [require.resolve('./react-app.app-root')],
  deploy: localDeployerFactory({appName: 'react-app', dist: 'react-app'}),
  // prerender: {
  //   routes: [
  //     '/',
  //   ],
  // },
};

export default ReactApp;
