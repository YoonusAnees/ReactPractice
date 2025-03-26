import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import {store} from './store';
export default function RootLayout() {
  
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const App=()=>{
return(
  <Stack />
);
}
