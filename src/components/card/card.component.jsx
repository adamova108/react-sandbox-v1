import React from "react";

import './card.styles.css';

export const Card = (props) => {
    return (
        <div className="card-container" onClick={props.handleClick}>
            { 
                // This works as well
                //<img alt={'m-' + props.monster.id} src={'https://robohash.org/' + props.monster.id + '?set=set2'} />
            }
            <img alt={'m-' + props.monster.id} src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} />
            <h4 style={{wordBreak: 'break-word'}}>{props.monster.name}</h4>
            <p style={{wordBreak: 'break-all'}}>{props.monster.email}</p>
        </div>
    );
}