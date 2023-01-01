import { NavigationContainer } from '@react-navigation/native';;
import Navigation from './frontend/navigation/navigation';
import AuthContextProvider from './frontend/store/AuthContext';
import SignUpContextProvider from './frontend/store/SignUpContext';


export default function App() {
  
  return (
    <AuthContextProvider>
      <SignUpContextProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SignUpContextProvider>
    </AuthContextProvider>
  );
}
