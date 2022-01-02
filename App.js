import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import AppNavigator from './src/navigation/AppNavigation';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import ProductReducer from './store/reducer/Product';
import cartReducer from './store/reducer/cart';
import SplashScreen from 'react-native-splash-screen'


const rootReducer = combineReducers({
  product: ProductReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk)),
);





const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      {/* <HomeScreen /> */}
    </>
  )
}

export default App
