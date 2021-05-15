import React from 'react'
import './Mail.css'
import {IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import InputIcon from '@material-ui/icons/Input';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useHistory} from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PrintIcon from '@material-ui/icons/Print';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Button,Avatar} from '@material-ui/core';
import ReplyIcon from '@material-ui/icons/Reply';
import ForwardIcon from '@material-ui/icons/Forward';
function Mail() {
    const history =useHistory();
    
    return (
        <div className='mail'>
            <div className='mail-head'>
                <div className='headleft'>
                <IconButton onClick={()=>{history.push("/")}}><ArrowBackIcon/></IconButton>
                <IconButton><ArchiveIcon/></IconButton>
                <IconButton><ReportIcon/></IconButton>
                <IconButton><DeleteIcon/></IconButton>
                <div id='one'><p>|</p></div>
                <IconButton><MarkunreadIcon/></IconButton>
                <IconButton><WatchLaterIcon/></IconButton>
                <IconButton><LibraryAddCheckIcon/></IconButton>
                <div id='two'><p>|</p></div>
                <IconButton><InputIcon/></IconButton>
                <IconButton><LabelIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
                </div>
                <div className='headright'>
                    <IconButton><ChevronLeftIcon/></IconButton>
                    <IconButton><ChevronRightIcon/></IconButton>
                </div>
            </div>
            <div className='mail-title'>
                <div className='titleleft'>
                    <p>Free courses for learners in India</p>
                </div>
                <div className='titleright'>
                    <IconButton><PrintIcon/></IconButton>
                    <IconButton><OpenInNewIcon/></IconButton>
                </div>
            </div>
            <div className='mail-av'>
                <div className='avleft'>
                    <Avatar id='av'/>
                    <div id='tit'><p>Coursera to me</p>
                    <p id='low'>@m.mail.coursera.org</p></div>
                </div>
                <div className='avright'>
                    <p>10:35:23PM</p>
                    <IconButton><StarBorderIcon/></IconButton>
                    <IconButton><ReplyIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                </div>
            </div>
            <div className='mail-body'>   
                <img src='https://lever-client-logos.s3.us-west-2.amazonaws.com/63a8149d-79fd-4c15-8241-2a3d73c0445b-1607995671294.png' id='cor' alt=''/>
                <div className='mail-msg'>
                    <p>Coursera's global community holds India in our hearts during this challenging time.</p>
                    <p id='l'>We’ve made a special selection of courses available for free so you can continue to learn and earn certificates from world-class experts at Google Cloud, Amazon, the University of Michigan, and more.* Topics range from IT, finance, and cloud computing to leadership, poetry, and public health.</p>
                    <button id='button'>Explore Free Courses</button>                
                </div>
            </div>
            <div className='mail-button'>
            <Button startIcon={<ReplyIcon id='dd'/>} >   Reply</Button>
            <Button startIcon={<ForwardIcon id='dd'/>} >   Forward</Button>
            </div>
        </div>
    )
}

export default Mail
