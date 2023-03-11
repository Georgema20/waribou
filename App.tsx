import { NavigationContainer } from '@react-navigation/native';;
import Navigation from './frontend/navigation/navigation';
import AuthContextProvider from './frontend/store/AuthContext';
import TripContextProvider from './frontend/store/TripContext';


export default function App() {
  
  return (
    <AuthContextProvider>
      <TripContextProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
      </TripContextProvider>
    </AuthContextProvider>
  );
}
