import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/ui/input'
import usePageMetadata from '../hooks/usePageMetadata'

const Login = () => {
  usePageMetadata({
    title: "Login | Power BI Portal",
    description: "Sign in to access your Power BI dashboards and reports"
  });

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check hardcoded credentials
    if (username === 'testuser' && password === 'password123') {
      // Store auth state in localStorage
      localStorage.setItem('isAuthenticated', 'true')
      // Navigate to dashboard
      navigate('/dashboard')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Sign in to Power BI Portal</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <Input
                placeholder="username or email"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (error) setError('');
                }}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer">
            Sign in
          </button>

          {error && (
            <div className="text-sm text-red-500 text-center">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login 