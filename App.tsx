import { NavigationContainer } from '@react-navigation/native';;
import Navigation from './frontend/navigation/navigation';
import AuthContextProvider from './frontend/store/AuthContext';
import SignUpContextProvider from './frontend/store/SignUpContext';
import TripContextProvider from './frontend/store/TripContext';


export default function App() {
  
  return (
    <AuthContextProvider>
      <TripContextProvider>
        <SignUpContextProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SignUpContextProvider>
      </TripContextProvider>
    </AuthContextProvider>
  );
}
