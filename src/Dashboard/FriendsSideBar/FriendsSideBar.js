import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from './AddFriendButton';
import FriendsTitle from "./FriendTitle";
import FriendList from "./FriendList/FriendList";
import PendingInvitaionList from "./PendingInvitationList/PendingInvitaionList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton/>
      <FriendsTitle title='Private Messages'/>
      <FriendList/>
      <FriendsTitle title='Invitations'/>
      <PendingInvitaionList/>
    </MainContainer>
  );
};

export default FriendsSideBar;
