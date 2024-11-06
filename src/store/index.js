import {configureStore} from '@reduxjs/toolkit'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import exampleSlice from './Example/Example';
  import usersSlice from './Users/Users';
  import unknownSlice from './Unknown/Unknown';
  import navbarSlice from './Navbar/Navbar';

  const store = configureStore({

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
     }),
    reducer:{
        example: exampleSlice.reducer,
        users: usersSlice.reducer,
        unknown: unknownSlice.reducer,
        navbar: navbarSlice.reducer,
        // login: loginReducer
    }
  })

  export default store;
