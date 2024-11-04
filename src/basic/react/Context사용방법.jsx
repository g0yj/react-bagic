/**
 *  Context를 사용하는 이유?!
 *  -> 두 컴포넌트의 상태 값을 공유해야한다면...? state를 가장 근접한 부모 컴포넌트로 올림! 
 *    -> props로 전달하면 되는데 ...... 아래쪽에 있는 컴포넌트의 상태가 변경되게 되는거라면 props를 계속 전달하게 되고 ,, 효율 떨어짐
 *      -> Context API를 사용하자! -> 모든 컴포넌트들에서 필요한 경우 (= 어플리케이션 전반적으로 필요한 경우) : ex. 언어, 테마, 로그인여부등
 *        -> Context API를 사용하는 모든 자식 컴포넌트는 상태가 변경된거기때문에 리렌더링되는거임.. 따라서 빈번한 업데이트가 되는 상황에 적합하지 않음
 *          -> 해결방법 : 엄브렐라테크닉~! 근접한 곳에서 우산을 씌워주자
 * 1. context()만들기
 *    context를 만들 때는 provider를 항상 만들어야함! DarkModeContext.jsx 참고
 * 2. 우산 씌워주기 : <DarkModeProvider>
 *    
 * 3. toggle했을때마다 사용하기 : ProductDetail()
 */

import React, { useContext } from 'react';
//import './AppTheme.css';
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

export default function Context사용방법() {
  return (
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
