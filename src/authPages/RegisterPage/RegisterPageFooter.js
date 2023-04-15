import React from "react";
import CustomePrimaryButton from "../../shared/components/CustomePrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = () => {
  return "Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should provided";
};

const getFormValidMessage = () => {
  return "Press to register!";
};

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigation = useNavigate();

  const handlePushToLoginPage = () => {
    navigation("/login");
  };

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomePrimaryButton
            label="Register"
            additionStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text={""}
        redirectText={"Already have an account ?"}
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  );
};

export default RegisterPageFooter;
