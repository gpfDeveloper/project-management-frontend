import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import { TeamMember } from 'types/types';
import { sampleTeamMembers } from 'dummyData/dummyData';

type AuthProps = {
  user: TeamMember | null;
  signUp: (username: string, email: string, password: string) => void;
  confirmSignUp: (username: string, authCode: string, password: string) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
  forgotPassword: (username: string) => void;
  resetPassword: (username: string, authCode: string, password: string) => void;
};

const initialAuth: AuthProps = {
  user: null,
  signUp: Function,
  login: Function,
  logout: Function,
  confirmSignUp: Function,
  forgotPassword: Function,
  resetPassword: Function,
};

const AuthContext = createContext<AuthProps>(initialAuth);
export default AuthContext;

type Props = {
  children: ReactNode;
};

export const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const [user, setUser] = useState<TeamMember | null>(sampleTeamMembers[1]);

  const initiateUser = async () => {
    // try {
    //   const curUser = await AmpAuth.currentAuthenticatedUser();
    //   const _user: User = {
    //     id: curUser.username,
    //     username: curUser.username,
    //     picture: '/',
    //   };
    //   if (curUser.attributes.name) {
    //     _user.username = curUser.attributes.name;
    //   }
    //   if (curUser.attributes.identities) {
    //     const identity = JSON.parse(curUser.attributes.identities)[0];
    //     if (identity.providerType === 'Google') {
    //       _user.picture = curUser.attributes.picture;
    //     }
    //     if (identity.providerType === 'Facebook') {
    //       const picObj = JSON.parse(curUser.attributes.picture);
    //       _user.picture = picObj.data.url;
    //     }
    //   }
    //   setUser(_user);
    // } catch (err) {
    //   setUser(null);
    // }
  };

  const signUp = async (username: string, email: string, password: string) => {
    // await AmpAuth.signUp({ username, password, attributes: { email } });
  };

  const confirmSignUp = async (
    username: string,
    authCode: string,
    password: string
  ) => {
    // await AmpAuth.confirmSignUp(username, authCode);
    // await AmpAuth.signIn(username, password);
    // await initiateUser();
  };

  const login = async (email: string, password: string) => {
    // await AmpAuth.signIn(username, password);
    // await initiateUser();
    const member = sampleTeamMembers.find((item) => item.email === email);
    if (!member) throw Error('Incorrect email or password');
    if (member.password !== password)
      throw Error('Incorrect email or password');
    setUser(member);
  };

  const logout = () => {
    setUser(null);
    // AmpAuth.signOut();
  };

  const forgotPassword = async (username: string) => {
    // await AmpAuth.forgotPassword(username);
  };

  const resetPassword = async (
    username: string,
    authCode: string,
    password: string
  ) => {
    // await AmpAuth.forgotPasswordSubmit(username, authCode, password);
  };

  useEffect(() => {
    initiateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        signUp,
        confirmSignUp,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
