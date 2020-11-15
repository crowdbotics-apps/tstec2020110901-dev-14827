import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen614530Navigator from '../features/BlankScreen614530/navigator';
import BlankScreen414519Navigator from '../features/BlankScreen414519/navigator';
import BlankScreen214517Navigator from '../features/BlankScreen214517/navigator';
import BlankScreen114492Navigator from '../features/BlankScreen114492/navigator';
import BlankScreen014205Navigator from '../features/BlankScreen014205/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen614530: { screen: BlankScreen614530Navigator },
BlankScreen414519: { screen: BlankScreen414519Navigator },
BlankScreen214517: { screen: BlankScreen214517Navigator },
BlankScreen114492: { screen: BlankScreen114492Navigator },
BlankScreen014205: { screen: BlankScreen014205Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
