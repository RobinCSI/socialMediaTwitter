import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BsThreeDots } from "react-icons/bs";
import styles from "./ProfileCard.module.css";
import { Box } from "@mui/system";

import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { authAtom } from "../../recoil/users";
export default function ProfileCard() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authAtom);

  //Importing data from local
  const dataFromLocal = JSON.parse(localStorage.getItem("auth"));


  //  useEffect(()=>{
  //     const dataFromLocal=localStorage.getItem("auth")
  //     if(dataFromLocal){
  //       setData(JSON.parse(dataFromLocal))
  //     }
  //     else{
  //       setData([])
  //     }
  //  },[])
  //  console.log(data.auth)
  

  function handleToggle() {
    setShow(!show);
  }

  function handleLoggout() {
    setAuth({
      isLoggedIn: false,
      user: null,
    });
  }

  function handleAccount() {
    navigate("/login");
  }
  return (
    <div>
      {show ? (
        <Box
          sx={{
            width: 200,
            height: 35,
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: "black",
            margin: 2,
            padding: "2rem",
            textAlign: "center",
            border: "1px solid #dadce0",
          }}
        >
          <div className={styles.logoutCon}>
            <h3 onClick={handleAccount}>Add an existing account</h3>
            <h3 onClick={handleLoggout} className={styles.logouth3}>
              Logout
            </h3>
          </div>
        </Box>
      ) : (
        <></>
      )}
      <div   onClick={handleToggle} className={styles.container}>
        <CgProfile className={styles.profileIcon} />
        <div className={styles.name}>
          <h3>{dataFromLocal.user.name}</h3>
          <h4>{dataFromLocal.user.email}</h4>
        </div>
        <BsThreeDots    />
      </div>
    </div>
  );
}
