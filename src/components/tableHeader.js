import React from 'react';

export default function Header() {

    let headerObject = {
        name: 'NAME',
        number: 'NUMBER',
        email: 'EMAIL',
        location: {
            lat: 'LATITUDE',
            long: 'LONGITUDE',
        },
        actions: 'ACTIONS'
    }

    return (
        <div id="heading">
            <div className="name"><div className='space'></div>{headerObject.name}</div>
            <div className="number">{headerObject.number}</div>
            <div className="email">{headerObject.email}</div>
            <div className='location'>{headerObject.location.lat}</div>
            <div className='location'>{headerObject.location.long}</div>
            <div className='action'>{headerObject.actions}</div>
        </div>
    )
}