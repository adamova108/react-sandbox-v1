import React from 'react';

export const CardList = (props) => {
    return (
        <div className="card-list">
            
            { 
                //JSON.stringify(props) 
                props.children
            }

                
            { JSON.parse(props.klukka).klikka }

        </div>
    )
}