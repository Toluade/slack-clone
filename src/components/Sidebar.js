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
import AddIcon from "@material-ui/icons/Add";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

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
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={QuestionAnswerIcon} title="All DMs" />
      <SidebarOption Icon={AlternateEmailIcon} title="Mentions & reactions" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Saved items" />
      <SidebarOption
        Icon={PermContactCalendarOutlinedIcon}
        title="People & user groups"
      />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={StorageIcon} title="File browser" />
      <SidebarOption Icon={MoreVertIcon} title="More" />
      <hr />
      <SidebarOption Icon={ArrowRightIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add channels" />

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
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

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
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
