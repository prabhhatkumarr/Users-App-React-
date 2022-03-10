import React from 'react';
import Avatar from "@material-ui/core/Avatar";

function Rows(props) {

    return (
        <div key={props.item.id} className="row" style={{ backgroundColor: ((props.item.id) % 2 === 1) ? "#FAFAFA" : "white" }}>
            <div className="name"><input type="checkbox" id="vehicle1" onClick={clickHandler}></input><Avatar style={{ width: 25, height: 25 }} src={"https://mui.com/static/images/avatar/" + (props.item.id % 7 + 1) + ".jpg"} className="avatar" />{props.item.name}</div>
            <div className="number">{props.item.phone}</div>
            <div className="email">{props.item.email}</div>
            <div className='location'>{props.item.address.geo.lat}</div>
            <div className='location'>{props.item.address.geo.lng}</div>
            <div className='action'>
                <div>🖉 Edit</div>
                <div>🗑 Delete</div>
            </div>
        </div>
    )
}

function clickHandler() {
}

export default Rows;