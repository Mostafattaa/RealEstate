import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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

    // Simulate signup logic
    console.log('Signup attempt:', formData);
    
    // For demo purposes, automatically log in the user after signup
    const username = `${formData.firstName} ${formData.lastName}`;
    localStorage.setItem('loggedIn', '1');
    localStorage.setItem('name', username);
    
    // Redirect to home page
    navigate('/');
    window.location.reload(); // Refresh to update navbar
  };

  return (
   <div
  className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/src/assets/imgs/back2.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 container mx-auto px-4 py-16">
    <div className="max-w-md mx-auto backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
        <p className="text-gray-200">Join us to find your perfect property</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                errors.firstName ? 'border-red-500 border' : 'border border-white/20'
              }`}
              placeholder="First name"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-400">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                errors.lastName ? 'border-red-500 border' : 'border border-white/20'
              }`}
              placeholder="Last name"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-400">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
              errors.email ? 'border-red-500 border' : 'border border-white/20'
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
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
                errors.password ? 'border-red-500 border' : 'border border-white/20'
              }`}
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 pr-10 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                errors.confirmPassword ? 'border-red-500 border' : 'border border-white/20'
              }`}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
        </div>

        {/* Terms */}
        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-200">
            I agree to the{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
        >
          Create Account
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-200">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default SignupPage;

