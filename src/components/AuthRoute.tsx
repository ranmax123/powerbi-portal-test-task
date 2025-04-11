import { Navigate } from 'react-router-dom'

interface AuthRouteProps {
  children: React.ReactNode
}

const AuthRoute = ({ children }: AuthRouteProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}

export default AuthRoute 