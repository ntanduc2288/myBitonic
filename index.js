import { AppRegistry } from 'react-native';
import App from './src/App';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: isMounted(...) is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Module RCTImageLoader requires',
  ]);

AppRegistry.registerComponent('myBitnoic', () => App);
