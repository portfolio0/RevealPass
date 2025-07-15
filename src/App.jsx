import { useRef, useState } from "react";
// import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import "./App.css";

function App() {
  const [password, setpassword] = useState("");
  const [type, settype] = useState("password");
  const icon = useRef();

  const handleclick = () => {
    if (type == "password") {
      settype("text");
    } else {
      settype("password");
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="border-2 w-fit">
          <div className="flex items-center">
            <input
              type={type}
              name="password"
              id="pass"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="border-0 outline-0 p-1"
            />
            <span className="p-1 border--black" ref={icon}>
              {type == "password" ? (
                <IoEye onClick={handleclick} className="cursor-pointer" />
              ) : (
                <IoEyeOffSharp
                  className="cursor-pointer"
                  onClick={handleclick}
                />
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
