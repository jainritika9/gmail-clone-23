import React from 'react'
import './EmailRow.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import {useHistory} from 'react-router-dom';
function EmailRow({title,description,subject,time,selected}) {
    const history=useHistory();

    return (
        <div onClick={()=>{
            history.push("/mail")
        }} className={`email-row ${selected && 'email-row-active'}`}>
            <div className='email-rowop'>
                <CheckBoxOutlineBlankIcon/>
                <StarOutlineIcon/>
            </div>
            <div className='email-rowtitle'>
                <h4>{title}</h4>
            </div>
            <div className='email-message'>
                <h4>{subject} - <span className='email-desp'>{description}</span></h4>
            </div>
            <div className='email-time'>
                {time}
            </div>
        </div>
    )
}

export default EmailRow
