
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfluencerLogin = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const [userdata, setUserdata] = useState({
    email: '', // Change 'username' to 'email'
    password: '',
  });

  const [passwordType, setPasswordType] = useState('password'); // State for password visibility toggle

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...userdata, [name]: value });
  };

  // Toggle password visibility
  const togglePassword = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const postdata = async (e) => {
    e.preventDefault();

    const { email, password } = userdata; // Use 'email' here instead of 'username'
    const res = await fetch('https://server-side-influencer.vercel.app/influencer/influencerlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, // Send 'email' in the payload instead of 'username'
        password,
      }),
    });

    const data = await res.json();
    console.log("token for inlfuer",data.token)
    localStorage.setItem("influcertoken",data.token)
    if (res.status === 200) {
      toast.success(data.message);
      localStorage.setItem('influencerID', data.user.influencerId); // Store influencer ID
      sessionStorage.setItem('sessionId', data.sessionId); // Store session ID
      navigate('/InfluencerHome?page=1');
    } else {
      toast.error(data.error);
    }
  };

  // Handle navigation to InfluencerSignUp page when "Register here" is clicked
  const navigateToSignUp = () => {
    navigate('/InfluencerSignUp');
  };

  return (
    <div className="font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form className="space-y-4" onSubmit={postdata}>
              <div className="mb-8">
                <h3 className="text-gray-800 text-3xl font-extrabold">Sign in as influencer</h3>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to your account and explore a world of possibilities. Your journey begins here.
                </p>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter email"
                    value={userdata.email}
                    onChange={handleInput}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={passwordType} // Set type dynamically based on the state
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter password"
                    value={userdata.password}
                    onChange={handleInput}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 24 24"
                    onClick={togglePassword} // Toggle password visibility when clicked
                  >
                    {passwordType === 'password' ? (
                      <path
                        d="M12 4C8.13 4 5 6.91 5 10s3.13 6 7 6 7-2.91 7-6-3.13-6-7-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                      />
                    ) : (
                      <path
                        d="M12 4C8.13 4 5 6.91 5 10s3.13 6 7 6 7-2.91 7-6-3.13-6-7-6zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                      />
                    )}
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="javascript:void(0);" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>

              <p className="text-sm !mt-8 text-center text-gray-800">
                Don't have an account?{' '}
                <span
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap cursor-pointer"
                  onClick={navigateToSignUp} // Navigate to the signup page
                >
                  Register here
                </span>
              </p>
            </form>
          </div>
          <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Influencer Login"
            />
          </div>
        </div>
      </div>
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default InfluencerLogin;
