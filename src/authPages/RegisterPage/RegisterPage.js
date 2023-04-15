import React,{useState,useEffect} from "react";
import AuthBox from "../../shared/components/AuthBox";
import { Typography } from "@mui/material";
import RegisterPageInputs from "./RegisterPageInputs";
import RegisterPageFooter from "./RegisterPageFooter";
import { validateRegisterForm } from "../../shared/ultils/validators";
import { getActions } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterPage = ({register}) => {
  const navigation = useNavigate();

  const [mail, setMail] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(()=>{
    setIsFormValid(validateRegisterForm({
      mail,password,username
    }))
  },[mail,username,password,setIsFormValid]);

  const handleRegister= () =>{
   const userDetails = {
    mail,
    password,
    username
   };

   register(userDetails,navigation);
  }
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>

      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        s
      />
      <RegisterPageFooter  handleRegister={handleRegister} isFormValid={isFormValid}/>
    </AuthBox>
  );
};
const mapActionsToProps = (dispatch) =>{
  return{
    ...getActions(dispatch),
  }
}
export default connect(null,mapActionsToProps)(RegisterPage);
