import React, { Component } from 'react';

import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import 'tachyons';
import './App.css';


// const particlesOptions = {
//   particles: {
//     number: {
//       value: 75,
//       density: {
//         enable:true,
//         value_area: 800
//       }
//     // line_linked: {
//     //   shadow: {
//     //     enable: true,
//     //     color: "#3CA9D1",
//     //     blur: 5
//     //   }
//     }
//   }
// }

const particlesOptions = {
  particles: {
    number:{
      value:100,
      density:{
        enable:true,
        value_area:800
      }
    },
    color:{
      value: '#ffffff'
    },
    shape:{
      type:"circle",
      stroke:{
        width:0,
        color:"#000000"},
        polygon:{"nb_sides":5},
        image:{
          src:"img/github.svg",
          width:1000,
          height:1000
        }
      },
      opacity:{
        value:0.5,
        random:false,
        anim:{
          enable:false,
          speed:1,
          opacity_min:0.1,
          sync:false
        }
      },
      size:{
        value:3,
        random:true,
        anim:{
          enable:false,
          speed:40,
          size_min:0.1,
          sync:false
        }
      },
      line_linked:{
        enable:true,
        distance:150,
        color:"#ffffff",
        opacity:0.4,
        width:1},
        move:{
          enable:true,
          speed:6,
          direction:"none",
          random:false,
          straight:false,
          out_mode:"out",
          bounce:false,
          attract:{
            enable:false,
            rotateX:600,
            rotateY:1200
          }
        }
      },
      interactivity:{
        detect_on:"window",
        events:{
          onhover:{
            enable:true,
            mode:"repulse"
          },
          onclick:{
            enable:true,
            mode:"push"
          },
          resize:true
        },
        modes:{
          grab:
          {distance:200,
            line_linked:{
              opacity:1
            }
          },
          bubble:{
            distance:200,
            size:40,
            duration:2,opacity:8,
            speed:3},
            repulse:{
              distance:200,
              duration:0.4},
              push:{
                particles_nb:4
              },
              remove:
              {"particles_nb":2
            }
          }
        },
        retina_detect:true
      };

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  
  //Create a Listener State
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  
  render() {
    return (
      <div className="App">
          <Particles className= 'particles'
              params={particlesOptions} 
              />
        <Navigation/>
           <Logo />
           <Rank />
            <ImageLinkForm onInputChange={this.onInputChange}/>
            {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
