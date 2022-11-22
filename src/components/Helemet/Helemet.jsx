import React from 'react'

const Helemet = (props) => {
    document.title = "" + props.title;
    return (
        <div className='2-100'>
            {props.children}
        </div>
    )
}

export default Helemet;
