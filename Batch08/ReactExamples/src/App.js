import './App.css';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

// import Friends from './C1.4/Friends';
import HeartButtonClass from './C1.6/HeartButtonClass';
import Gallery1Class from './C1.6/Gallery1Class';
import Gallery2Class from './C1.6/Gallery2Class';
import Gallery1 from './C1.6/Gallery1';
import Gallery2 from './C1.6/Gallery2';
import LikeButtonClass from './C1.5/LikeButtonClass';
import LikeButton from './C1.5/LikeButton';
import TextInput from './C1.7/TextInput';
import SelectInput from './C1.7/SelectInput';
import CheckBox from './C1.7/CheckBox';
import MoreHandleEvent from './C1.7/MoreHandleEvent';
import Articles from './C1.8/Articles';
import Friends from './C1.8/Friends';
import Products from './C1.8/Products';
// import Example1 from './Session04/Example1';

import Users from './FirestoreExamples/Users';

function App() {
  const [state, setState] = React.useState({ visible: true });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* <Friends></Friends> */}

      {/* <HeartButtonClass></HeartButtonClass> */}
      {/* <Gallery1Class></Gallery1Class> */}
      {/* {state.visible && <Gallery1Class></Gallery1Class>} */}
      {/* {state.visible && <Gallery1></Gallery1>} */}
      {/* <Gallery2Class></Gallery2Class> */}
      {/* <Gallery2></Gallery2> */}
      {/* <button
        onClick={() => {
          let newValue = !state.visible;
          setState({ visible: newValue });
        }}
      >
        Click me
      </button> */}

      {/* <LikeButtonClass
        // count={9}
        color='green'
        onClick={() => {
          alert('DONE');
        }}
      ></LikeButtonClass> */}
      {/* <LikeButton count={4}></LikeButton> */}

      {/* <TextInput></TextInput>
      <SelectInput></SelectInput>
      <CheckBox></CheckBox> */}
      {/* <MoreHandleEvent></MoreHandleEvent> */}

      {/* <Articles></Articles> */}
      {/* <Friends></Friends> */}
      {/* <Products></Products> */}
      {/* <Example1 /> */}
      <Users />
    </div>
  );
}

export default App;
