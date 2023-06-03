import {configureStore} from '@reduxjs/toolkit'
import tweetsReducer from './tweetsSlice'

import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';


const reducers = combineReducers({
    tweets: tweetsReducer,
  });

const persistConfig={
    key: 'root', 
    storage
}

const persistedReducer=persistReducer(persistConfig, reducers)

export const store=configureStore({
    reducer: persistedReducer, 
    middleware: [thunk]
    
})
export default store
// export const persistor=persistStore(store)