import React from 'react';

const InlineCaption = (props) => {
    const {message, messageColor, margin} = props;
    
    return (
        <div className={`InlineCaption container__col-24 p-l-25 ${margin}`}>
            <p className={message ? messageColor : 'container__row inlineCaption-white'}>{message}</p>
        </div>
    );
};

export default InlineCaption;