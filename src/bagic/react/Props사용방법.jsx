import React from 'react';

export default function Props사용방법(props) {
    const { name, children } = props;
    return (
        <div>
            props로 name 전달해보자. 속성은  {props.name} 임. <br/>
            태그 속 내용은  {props.children}
            
            <h3>비구조화할당문법사용해봄</h3>
            {name}<br/>
            {children}
        </div>
    );

}
