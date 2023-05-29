import db from './firebase.config';
import React from 'react';
 const send_data=async(props)=>{
    try {
        await db.collection("<database name>").doc(`/${Date.now()}/`).create({
            name:$`{props.name}`,
            email:$`{props.email}`,
            phone:$`{props.phone}`,
            describeYourself:$`{props.describeYourself}`,
            companyName:$`{props.companyname}`,
            onlinePresence:$`{props.onlinePresence}`,
            message:`${props.message}`,
        })
    } catch (e) {
        
    }
 }