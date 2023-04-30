import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import style from "./Login.module.css";
import { BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Icons from "../../components/smallComponents/Icons";
import UiPart from "../../components/smallComponents/UiPart";
import { ImCross } from "react-icons/im";
import NormalButton from "../../components/smallComponents/NormalButton";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
const Login = () => {
  const [data, setData] = useState([]);
  const [firstInput, setFirstInput] = useState("");
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();
  const userData = [
    {
      name: "Rishi",
      email: "rishi@gmail.com",
      phnNO: "12345678",
    },
    {
      name: "Ravi",
      email: "ravi@gmail.com",
      phnNO: "2345678",
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      phnNO: "345678",
    },
    {
      name: "Robin",
      email: "robin@gmail.com",
      phnNO: "5678",
    },
  ];

  localStorage.setItem("users", JSON.stringify(userData));

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("users");
    if (dataFromLocal) {
      setData(JSON.parse(dataFromLocal));
    } else {
      setData([]);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (firstInput == "") {
      alert("Please fill the currect userNaame,email or phon number");
    } else {
      const findUser = data.find((user) => {
        return (
          user.name === firstInput ||
          user.email === firstInput ||
          user.phnNO === firstInput
        );
      });
      if (!findUser) {
        alert("user data not found");
      } else {
        setShow(!show);
      }
    }
  }
  function handleForm() {
    setShowForm(false);
    navigate("/");
  }
  return (
    <div>
      {!show ? (
        <form onSubmit={handleSubmit}>
          {showForm && (
            <Box
              sx={{
                zIndex: 99,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 500,
                maxHeight: 500,
                backgroundColor: "white",
                borderRadius: "10px",
                border: "2px solid lightgrey",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                top: "50%",
                left: "50%",
               marginTop:-5,
                padding: 11,
              }}
            >
              <button onClick={handleForm}>
                <Icons icons={<ImCross className={style.cross} />} />
              </button>

              <UiPart title="Sign in to Twitter" />
              <div className="hrr">or</div>

              <TextField
                onChange={(e) => setFirstInput(e.target.value)}
                value={firstInput}
                id="filled-basic"
                label="Phone,email, or username"
                variant="outlined"
                sx={{ width: 300 }}
              />

              <Button
                variant="outlined"
                type="submit"
                sx={{
                  textTransform: "none",
                  width: 300,
                  height: 40,
                  border: "1px solid #dadce0",
                  backgroundColor: "black",
                  borderRadius: "50px",
                  color: "white",
                  fontFamily: "Google Sans arial,sans-serif",
                  fontSize: 14,
                  letterSpacing: 0.25,
                  margin: 2,

                  "&:hover": {
                    backgroundColor: "initial",
                    color: "initial",
                    border: "1px solid #dadce0",
                  },
                }}
              >
                Next
              </Button>

              <Button
                sx={{
                  textTransform: "none",
                  width: 300,
                  height: 40,
                  border: "1px solid #dadce0",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  color: "black",
                  fontFamily: "Google Sans arial,sans-serif",
                  fontSize: 14,
                  letterSpacing: 0.25,
                  margin: 2,

                  "&:hover": {
                    backgroundColor: "initial",
                    color: "initial",
                    border: "1px solid #dadce0",
                  },
                }}
                variant="outlined"
              >
                Forget password ?
              </Button>
              <p className="p">
                Don't have an account?{" "}
                <span>
                  <NavLink className="link" to="/signup">
                    Sign up
                  </NavLink>
                </span>
              </p>
            </Box>
          )}
        </form>
      ) : (
        <div>
          <Box
            sx={{
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 500,
              maxHeight: 500,
              backgroundColor: "white",
              borderRadius: "10px",
              border: "2px solid lightgrey",
              transform: "translate(-50%, -50%)",
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -5,
              padding: 15,
            }}
          >
            <button onClick={handleForm}>
              <Icons icons={<ImCross className={style.cross} />} />
            </button>

            <UiPart title="Sign in to Twitter" />

            <TextField
              id="filled-basic"
              // label="Phone,email, or username"
              value={firstInput}
              variant="outlined"
              sx={{ width: 300, marginBottom: 5 }}
            />

            <TextField
              id="filled-basic"
              label="Password"
              variant="outlined"
              sx={{ width: 300 }}
            />

            <p className="p">
              Don't have an account?{" "}
              <span>
                <NavLink className="link" to="/signup">
                  Sign up
                </NavLink>
              </span>
            </p>
          </Box>
        </div>
      )}
      <Navbar />
    </div>
  );
};

export default Login;
