/*  eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState([0,0,0]);
    let posts = '강남 고기 맛집';
    let [누른제목, 누른제목변경] = useState(0);
    // 글제목변경([])
    let [입력값, 입력값변경] = useState('');
    let [modal, modal변경] = useState(false);
    function 제목바꾸기(){
        var newArray = [...글제목];
        newArray[0] = '여자코트 추천';
        글제목변경(newArray);
    }
    function 정렬(){
        var newArray2 = [...글제목];
        newArray2.sort();
        글제목변경(newArray2);
    }


  return (
    <div className="App">
      <div className="black-nav">
          <div> 개발 Blog</div>
          <button onClick={  제목바꾸기 }>버튼</button>
          <button onClick={  정렬 }>버튼</button>
      </div>
        {
            글제목.map(function (글, i){
                    return (
                        <div className="list" key={i}>
            <h3 onClick={  ()=>{ 누른제목변경(i) } } > { 글 } </h3><span onClick={ function (){
                따봉변경(따봉[i]+1)
            } }>❤</span>{따봉[i]}
                        <p>2월 18일 발행</p>
                        <hr/>
                        </div>
                    )
                })
        }

        <div className="publish">
            <input onChange={ (e)=>{ 입력값변경(e.target.value) }}/>
            <button onClick={ ()=> {
                var arrayCopy = [...글제목];
                arrayCopy.unshift(입력값);
                글제목변경( arrayCopy );
            } }>저장</button>
        </div>

        <input onChange={ (e)=>{ 입력값변경(e.target.value) } }/>
        <button onClick={ ()=>{ 누른제목변경(0) } }>버튼1</button>
        <button onClick={ ()=>{ 누른제목변경(1) } }>버튼2</button>
        <button onClick={ ()=>{ 누른제목변경(2) } }>버튼3</button>
        <Profile/>

        {
            modal == true ? <Modal 글제목={글제목} 누른제목={누른제목} ></Modal> : null
        }

    </div>
  );
}

function Modal(props){
    return (
        <div className="modal">
            <h2 >제목 { props.글제목[props.누른제목] }</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

class Profile extends React.Component{
    constructor() {
        super();
        this.state = { name : 'Kim', age : 30 }
    }

    changeName = () => {
        this.setState({ name: 'Park' })
    }

    render() {
        return(
            <div>
                <h3>프로필입니다.</h3>
                <p>저는 {this.state.name} 입니다</p>
                <p>저는 {this.state.age} 입니다.</p>
                <button onClick={ this.changeName }>버튼</button>
            </div>

        )
    }
}

export default App;
