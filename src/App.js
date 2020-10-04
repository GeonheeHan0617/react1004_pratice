
// function type
/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

//  class type
import React, { Component} from 'react';
import './App.css';

class Subject extends Component {
  render() {
    /* 최상위 tag만 사용함 header 부분만 */
    return(
      <header> 
        <h1>{this.props.title}</h1> 
        1. {this.props.sub1} <br></br>
        2. {this.props.sub2} <br></br>
        3. {this.props.sub3} 
    </header>
    );
  }
}

class TOC extends Component{
  render() {
    return (
      <nav>
      <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">Javascript</a></li>
          
      </ul>
  </nav>
    );
  }
}

class Content extends Component{
  render() {
    return(
      <article>

        <h2> {this.props.title} </h2> <br></br>
       1) {this.props.desc1} <br></br>
       2) {this.props.desc2} <br></br>
       3) {this.props.desc3} <br></br>
       4) {this.props.desc4} <br></br>


    </article>
    )
  }
}

/* javascript 가 아님  */
class App extends Component { // component 만들기 
  render() {
    return (
      <div className="App">
        <h2>안녕하세요!! 저는 javascript 개발자 한건희 입니다. </h2>
        <Subject title="English" sub1=" world wide web !!" sub2="Have you nice today ~!~!" sub3="Thanks too much ~ ~! "></Subject>
        <Subject title="korea(한국어)" sub1=" 월드 와이드 웹 !!" sub2="오늘 잘 했어 ~!~!" sub3="감사합니다. ~ ~! "></Subject>
        <TOC></TOC>
        <Content title="HTML" desc1="HTML is HyperText Markup Language."desc2="(웹 페이지에서 다른 페이지로 이동할 수 있도록 하는 것) 기능을 가진 문서를 만드는 언어입니다."
        desc3="다시 말해, 구조를 설계할 때 사용되는 언어로 hyper link 시스템을 가지고 있습니다."
        desc4="흔히 말하는 웹 페이지를 위한 마크업 언어라고 할 수 있습니다."></Content>
        

      </div>
    )
  }

}

export default App;
