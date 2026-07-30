import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/useauthStore.js";
const API = import.meta.env.VITE_API_URL;


const Login = () => {
  const { login } = useAuthStore();

  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (toast) {
      const timerId = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`${API}/user/login`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      console.log(JSON.stringify(formData));
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "login failed");
      }
      login(data.user, data.token);

      setToast({ message: "Loggin successfull", type: "success" });
      setTimeout(() => {
        (navigate("/"), 1500);
      }, 1500);
    } catch (err) {
      setToast({ message: err.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center  my-20">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Welcome back? Login yourself</h2>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label" htmlFor="name" name="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="input"
                placeholder="Enter your email here"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="fieldset">
              <label className="label" htmlFor="name">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="input"
                placeholder="Enter your password here"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </fieldset>

            <div className="card-actions justify-center mt-5 ">
              <button className="btn btn-primary" type="submit">
                {loading ? "Taking you there..." : "Login"}
              </button>
            </div>
            <div className="text-center mt-4 text-sm">
              <span className="text-gray-500">New here? </span>
              <Link
                to="/signup"
                className="text-primary font-semibold hover:underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
      {toast && (
        <div className="toast toast-end">
          <div
            className={`alert ${toast.type === "success" ? "alert-success" : "alert-error"}`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
