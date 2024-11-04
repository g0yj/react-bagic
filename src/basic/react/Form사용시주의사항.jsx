import React, { useState } from 'react';

/**
 * 리액트의 철학은 모든 업데이트는 상태변경으로부터 발생해야한다임.
 * form 태그 사용 시, 내용을 입력했을 때 ui 적으로는 변경 되나 상태값이 변경되는 건 아님! 
 * 따라서 에러 메세지를 보여주게 되는데..!! 상태관리를 추가해서 맞춰주도록 하자!!
 *                                       -> const [form, setFrom] = useState({ name: '', email: '' });
 */
export default function Form사용시주의사항() {
  const [form, setFrom] = useState({ name: '', email: '' });
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침을 원하는게 아니라면 반드시 해줘야됨! 
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
