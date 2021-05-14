import React from 'react'
import './Sendmail.css'
import CloseIcon from '@material-ui/icons/Close'
import MinimizeIcon from '@material-ui/icons/Minimize';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

import TextFormatIcon from '@material-ui/icons/TextFormat';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { closeSendMessage } from './features/mailSlice';
import {useDispatch} from 'react-redux';
function SendMail() {
    const dispatch = useDispatch();
    return (
        <div className='sendmail'>
            <div className='sendmail-head'>
                <h3>New Message</h3>
                <div className='send'>
                <MinimizeIcon/>
                <FullscreenIcon/>
                <CloseIcon onClick={()=>{dispatch(closeSendMessage())}}/>
                </div>
            </div>
            <form >
                <input name='to' type='text' placeholder='Recipants'  />
                <input name='subject' type='text' placeholder='Subject' />
                <input className='txt' name='message' placeholder='Message..' type='text' />

                <div className='toolbar' >
                    <div className='toolleft'>
                       <button type='submit' >Send</button>
                       <TextFormatIcon/>
                       <AttachFileIcon/>
                       <InsertLinkIcon/>
                       <InsertEmoticonIcon/>
                       <InsertDriveFileIcon/>
                       <InsertPhotoIcon/>
                    </div>
                    <div className='toolright'>
                        <MoreVertIcon/>
                        <DeleteIcon/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMail
