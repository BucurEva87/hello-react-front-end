import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
