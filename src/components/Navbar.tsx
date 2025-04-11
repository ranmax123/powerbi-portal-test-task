import { useNavigate } from 'react-router-dom'


const Navbar = () => {
	const navigate = useNavigate()


	const handleLogout = () => {
			// Clear authentication state
			localStorage.removeItem('isAuthenticated')
			// Navigate back to login
			navigate('/')
	}
  return (
    <nav className="bg-blue-500 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <button className="text-white mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <span className="text-white font-bold">Dashboard</span>
      </div>
      <div className="flex items-center">
        <button className="text-white hover:bg-blue-600 px-4 py-2 rounded-md cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;