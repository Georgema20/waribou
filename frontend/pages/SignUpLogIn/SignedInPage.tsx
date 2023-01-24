
import { Text} from "react-native";
import LogOutButton from "../../components/LogOutButton";
import CenteredContainer from '../../components/CenteredContainer';
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

const SignedInPage = () => {

  const AuthCtx = useContext(AuthContext);
  console.log(AuthCtx.user.name);
return (
  <CenteredContainer>
    <Text>You Are Signed In</Text>
    <Text>{AuthCtx.user.name}</Text>
    <LogOutButton />
  </CenteredContainer>
);
}

export default SignedInPage;