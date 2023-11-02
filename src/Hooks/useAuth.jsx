
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useAuth = () => {
   const useUtils = useContext(AuthContext);
   return useUtils;
};

export default useAuth;