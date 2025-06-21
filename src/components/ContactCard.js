import React from 'react';
import user from '../images/user.png';

const ContactCard = (props) => {
    const {id, name, email} = props.contactProps;
    return (
        <div className="item">
            <div className="ui grid" style={{margin: 0, alignItems: "center"}}>
                <div className="one wide column">
                    <img src={user} alt="user" className="ui avatar image" />
                </div>
                <div className="thirteen wide column">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                <div className="two wide right aligned middle aligned column">
                    <i className="trash alternate outline red icon" onClick={() => props.clickHandler(id)}></i>
                </div>
            </div>
        </div>
    )
};

export default ContactCard
