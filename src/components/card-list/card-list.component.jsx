import React from 'react';

import './card-list.styles.css';

export const CardList = (props) => {
    return (
        <div className="card-list">

            <p style={{whiteSpace: 'pre-line'}}>{ 
            //JSON.stringify(props) 
                JSON.parse(props.klukka).klikka 
                + 
                `
                    backtick
                    "d-quote"
                    's-quote'
                `
            }</p>
            
            {props.children}

        </div>
    )
}