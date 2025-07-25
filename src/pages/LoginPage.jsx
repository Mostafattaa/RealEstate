import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate login logic
    console.log('Login attempt:', formData);
    
    const username = formData.email.split('@')[0];
    localStorage.setItem('loggedIn', '1');
    localStorage.setItem('name', username);
    
    // Redirect to home page
    navigate('/');
    window.location.reload(); // Refresh to update navbar
  };

  return (
    <div className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/src/assets/imgs/back2.jpg')" }}>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 bg-opacity-50 "></div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 py-16">
    <div className="max-w-md mx-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
        <p className="text-gray-200">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 pr-10 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none  ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 pr-10 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-gray-900"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-300">{errors.password}</p>}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-white">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-300 hover:text-blue-500">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-200">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-300 hover:text-blue-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default LoginPage;

