import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/useauthStore.js';

const PublicRoute = ({children}) => {

    const {token} = useAuthStore()
    
    if(token){
        return <Navigate to='/'/>
    }
  return children;
}

export default PublicRoute