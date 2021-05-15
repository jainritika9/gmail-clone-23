import React ,{useState,useEffect}from 'react'
import './emaillist.css'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InboxIcon from '@material-ui/icons/Inbox';
import EmailRow from './EmailRow.js';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {IconButton} from '@material-ui/core'
import Section from './Section.js';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { db } from './firebase';
function EmailList() {
    const [emails,setEmails]= useState([]);

    useEffect(()=>{
        db.collection("emails")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>
            setEmails(snapshot.docs.map((doc)=>({
                id: doc.id,
                data: doc.data(),
            }))
        )
        );
      },[]);
    return (
        <div className='email-body'>
        <div className='email-set'>
            <div className='email-left'>
                
                <IconButton><CheckBoxOutlineBlankIcon/><ArrowDropDownIcon/></IconButton>
                <IconButton><RefreshIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
            </div>
            <div className='email-right'>
                <IconButton><ChevronLeftIcon/></IconButton>
                <IconButton><ChevronRightIcon/></IconButton>
            </div>
        </div>
        <div className='email-sec'>
            <Section Icon={InboxIcon} title='Primary' color='red' selected/> 
            <Section Icon={SupervisorAccountIcon} title='Social' color='#1A73E8' /> 
            <Section Icon={LocalOfferIcon} title='Promotion' color='green' /> 
        </div>

        <div className='email-list'>
            {emails.map(( {id, data: { to ,message,subject,timestamp } })=>
                (<EmailRow 
                  id={id}
                  key={id}
                  title={to}
                  message={message}
                  subject={subject}
                  time={new Date(timestamp?.seconds*1000).toUTCString()}
                  />)
            )}
            <EmailRow title='Coursera' time='May 14' subject='Top Picks just for you' description='Recommended for you-Coursera'/>
            <EmailRow title='Hackerank Team' time='May 10' subject='We Challenge you to solve Even tree' description='Hii , It is burtling tim'/>
            <EmailRow title='Coursera' time='May 6' subject='Top Picks just for you' description='Recommended for you-Coursera'/>
            <EmailRow title='Coding Ninjas' time='May 5 ' subject='Top Picks just for you' description='Recommended for you-Coursera'/>
            <EmailRow title='Coursera' time='May 5 ' subject='Top Picks just for you' description='Recommended for you-Coursera'/>
            <EmailRow title='Google Cloud EDA' time='May 2' subject='Chance to Connect with potential employers |Google Cloud higher education' description='Get a chance to get'/>
            <EmailRow title='Coursera' time='May 2' subject='Top Picks just for you' description='Recommended for you-Coursera'/>
            <EmailRow title='Udemy' time='Apr 30' subject='[48 Hours Flash Sale] Get of My Courses for 95%!' description='New Promotional Annoucement Hi'selected/>
            <EmailRow title='Canva' time='Apr 30' subject='Top Picks just for you' description='Recommended for you-Coursera' selected/>
            <EmailRow title='Coursera' time='Apr 28' subject='Top Picks just for you' description='Recommended for you-Coursera'/>
            <EmailRow title='Udemy' time='Apr 28' subject='[48 Hours Flash Sale] Get of My Courses for 95%!' description='New Promotional Annoucement Hi' selected/>
        </div>
        </div>
    )
}

export default EmailList
