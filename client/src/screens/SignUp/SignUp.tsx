import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "../../components/NavigationBar";
import "./signup.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true);
    }, 300);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In a real app, you would send the data to your backend here
      console.log("Sign up data:", formData);

      // Reset form and loading state
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setIsLoading(false);

      // Redirect to dashboard or show success message
      // In a real app, you would use navigate from react-router-dom
      // navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="signup-page">
      <div className="signup-content">
        <NavigationBar />

        <main className="signup-main">
          <div className={`signup-header ${animateHeader ? 'animate' : ''}`}>
            <h1 className="signup-title">Sign up to join the StormShield Community</h1>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
              />
              {errors.username && <div className="error-message">{errors.username}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            </div>

            <button
              type="submit"
              className={`signup-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Sign Up'}
            </button>

            <div className="login-link">
              Already have an account? <Link to="/login">Log in</Link>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SignUp; 