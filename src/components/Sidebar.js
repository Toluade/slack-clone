import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import StorageIcon from "@material-ui/icons/Storage";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Avalanche Lagos</h2>
          <h3>
            <FiberManualRecordIcon />
            Tolu Ade
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} tilte="Threads" />
      <SidebarOption Icon={QuestionAnswerIcon} tilte="All DMs" />
      <SidebarOption Icon={AlternateEmailIcon} tilte="Mentions & reactions" />
      <SidebarOption Icon={BookmarkBorderIcon} tilte="Saved items" />
      <SidebarOption Icon={ArrowRightIcon} tilte="Channels" />
      <SidebarOption
        Icon={PermContactCalendarOutlinedIcon}
        tilte="People & user groups"
      />
      <SidebarOption Icon={AppsIcon} tilte="Apps" />
      <SidebarOption Icon={StorageIcon} tilte="File browser" />
      <SidebarOption Icon={MoreVertIcon} tilte="More" />
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 267px;
  margin-top: 60px;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 100%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin: 1px 2px 0 0;
    color: green;
  }
`;
