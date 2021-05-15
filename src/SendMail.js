import React from 'react'
import './Sendmail.css'
import firebase from 'firebase';
import CloseIcon from '@material-ui/icons/Close'
import MinimizeIcon from '@material-ui/icons/Minimize';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import {useForm} from 'react-hook-form';
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
import {db} from './firebase.js';
function SendMail() {
    const {register,handleSubmit,watch,errors}=useForm();
    const dispatch = useDispatch();

    const onSubmit=(formData)=>{
        console.log(formData);
        db.collection("emails").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(closeSendMessage());
    };
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' type='email' placeholder='Recipants' {...register('to')} required />
                <input name='subject' type='text' placeholder='Subject' {...register('subject')} required />
                <input className='txt' name='message' placeholder='Message..' {...register('message')} type='text' required/>

                <div className='toolbar' >
                    <div className='toolleft'>
                       <button type='submit'>Send</button>
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
