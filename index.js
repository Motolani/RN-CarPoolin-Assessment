/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import { AuthProvider } from './src/Context/AuthContext';
import { PaperProvider } from 'react-native-paper';

AppRegistry.registerComponent(appName, () => () => (

    // <AuthProvider>
        <PaperProvider>
            <App></App>
        </PaperProvider>
    // </AuthProvider>
    
), () => App );
