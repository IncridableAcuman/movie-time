import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoute = () => {
    const token=localStorage.getItem('accessToken')
  return token ? <Outlet/> : <Navigate to={'/auth'} />
}

export default PrivateRoute