import React, { useState } from "react";
import CustomePrimaryButton from "../../shared/components/CustomePrimaryButton";

const additionalStyles = {
  marginTop: "10px",
  marginLeft: "5px",
  width: "80%",
  height: "30px",
  background: "#3ba55d",
};
const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };
  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <CustomePrimaryButton
        additionStyles={additionalStyles}
        label={"Add Friend"}
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendButton
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  );
};

export default AddFriendButton;
