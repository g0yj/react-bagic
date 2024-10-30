import React, { useState } from 'react';

export default function 이벤트() {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('어서오세용')
    const onClickLeave = () => setMessage('안녕히가세용')
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h3>{message}</h3>
        </div>
    );
}

