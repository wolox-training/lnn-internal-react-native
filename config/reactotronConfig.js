/* eslint-disable new-cap */
/* eslint-disable prettier/prettier */
import Reactotron, { asyncStorage } from 'reactotron-react-native';
import { NativeModules } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron
  .configure({ host: scriptHostname })
  .use(asyncStorage())
  .use(reactotronRedux())
  .connect();


export default reactotron;
