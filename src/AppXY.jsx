import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div className='container' onPointerMove={(e) => {
      console.log(e.clientX, e.clientY);
      setX(e.clientX);
      setY(e.clientY);
    }}>
      <div 
        className='pointer'
        style={{ transform: `translate(${x}px, ${y}px)`}}      
      />
    </div>
  );
}

/**
 * 
 * 이벤트가 발생할때는 이벤트가 인자로 전달됨.. 
 * CSS의 transform : 초기값에 영향을 미치지 않는 요소의 변경
 *  translate(x,y) : 원래 위치를 기준으로 내가 원하는 방향으로 위치 시킴
 *  scale(x,y) : 숫자의 배율만큼 사이즈 조정
 *  rotate(deg) : 각도를나타내는 deg를 넣어 시계방향으로 회전
 *  skew(deg) : 비틀기 효과, 마름모꼴 
 * 
 * 
 */