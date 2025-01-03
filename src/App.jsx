/*eslint-disable*/

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천 ', '파이썬 독학 ', '강남 우동맛집']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // [1, 2, 3].map(function (a) {
  //   return '12345111';
  // });
  //array자료 갯수만큼 함수안의 코드 실행해줌
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다라 순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
          //글제목[0] = '여자 코트 추천';
          //글제목변경(글제목);

          //state변경함수 동작 원리
          //기존state == 신규state인지 검사하고 동일하면 변경하지않는다.
          // 그래서 카피해서 기존과 신규를 다르게 해야함
          //array/object 자료를 하나 만들면
          //let arr = [1,2,3] 에서 arr에 [1,2,3]를 넣어달라는것이 아님
          //[1,2,3]는 RAM 가상메모리에 저장되고 let arr는 그 위치를 알려주는 화상표 역할
          //그래서 copy해서 수정해도 화살표는 변하지않기때문에 값이 변하지않음
          // 그럴때 필요한건 화살표를 수정하는 방법임
          //[...ㅌㅌㅌ]처럼 3점을 넣으면 array괄호를 벗기고 새로운 화살표를 만들고 다시 array괄호를 만들어달라고합니다.
        }}
      >
        제목수정
      </button>

      {/* 여기까지 nar-bar */}

      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              let copy = [...따봉];
              copy[0]++;
              따봉변경([따봉[0] + 1, 따봉[1], 따봉[2]]);
            }}
          >
            👍
          </span>
          {따봉[0]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[1]}
          <span
            onClick={() => {
              따봉변경([따봉[0], 따봉[1] + 1, 따봉[2]]);
            }}
          >
            👍
          </span>
          {따봉[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
          <span
            onClick={() => {
              따봉변경([따봉[0], 따봉[1], 따봉[2] + 1]);
            }}
          >
            👍
          </span>
          {따봉[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let 글삭제 = [...글제목];
                글삭제.splice(i, 1);
                글제목변경(글삭제);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글추가
      </button>
      {modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} /> : null}
    </div>
  );
}

// const Modal = () => {
// }
//해당 문법으로 컴포넌트 작성가능 const로 만들면 실수로 수정해도 에러로 확인가능

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = '여자 코트 추천';
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
