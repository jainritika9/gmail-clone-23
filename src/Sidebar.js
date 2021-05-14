import React from 'react'
import './Sidebar.css'
import {Button,Avatar} from '@material-ui/core'
import {IconButton} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption.js';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person';
import SmsIcon from '@material-ui/icons/Sms';
import plus from './plus.jpeg';
import {useDispatch,useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {
    const dispatch = useDispatch();
    const user =useSelector(selectUser);
    return (
        <div className='sidebar'>
            <Button startIcon={<img src={plus} alt='' id='img'/>} className='compose' onClick={()=>{dispatch(openSendMessage())}}>   Compose</Button>
            <div className='menu'>
            <SidebarOption Icon={InboxIcon} title='Inbox' number='55' selected={true}/>
            <SidebarOption Icon={StarIcon} title='Starred' number='55'selected={false} />
            <SidebarOption Icon={WatchLaterIcon} title='Snoozed' number='55' selected={false}/>
            <SidebarOption Icon={SendIcon} title='Sent' number='55 'selected={false}/>
            <SidebarOption Icon={InsertDriveFileIcon} title='Drafts' number='55' selected={false}/>
            <SidebarOption Icon={LabelImportantIcon} title='Unwanted' number='55' selected={false}/>
            <SidebarOption Icon={ExpandMoreIcon} title='More' number='55' selected={false}/>
            </div>
            <div className='meet'>
                <h3>Meet</h3>
                <div id='item'>
                    <VideocamIcon/>
                    <h3>New Meeting</h3>
                </div>
                <div id='item'>
                    <KeyboardIcon/>
                    <h3>Join Meeting</h3>
                </div>
            </div>
            <div className='hangout'>
                <h3>Hangouts</h3>
                <div id='hang'>
                    <Avatar id='pop' src={user?.photoUrl}/>
                    <h3>{user?.displayName}</h3>
                    <ArrowDropDownIcon/>
                    <AddIcon/>
                </div>
                <div id='msg'>
                        <p >No recent chats</p>
                        <p id='i'>Start a new one</p>
                </div>
            </div>
            <div className='sidebar-foot'>
                <IconButton><PersonIcon/></IconButton>
                <IconButton><SmsIcon/></IconButton>
            </div>
        </div>
    )
}

export default Sidebar
