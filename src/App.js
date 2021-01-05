import './App.css';
import React, {useState, useEffect} from "react";
import Particles from 'react-particles-js';

function GitHubUser({login}) {
  const [data, setData] = useState(null); // use state hook
  const[followers, test] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json()) // turn result into json
    .then(setData) 
    .then(function(follower){
      return fetch('https://api.github.com/users/' + login + '/' + 'followers')
    })
    .then(follower => follower.json())
    .then(test)
    .catch(console.error);
  }, []);

  if(data) {
    //return <div>{JSON.stringify(followers[0].login)}</div>

    return (
            <div>
            <h1> GitHub Stats </h1>
            <h1>GitHub Username: {data.login}</h1>
            <img src={data.avatar_url} alt="image not found lol" width={300}></img>
            <h2>Your most recent follower was: {followers[0].login}</h2>
            <img src={`http://ghchart.rshah.org/${login}`}></img>
            <Particles 
              params={{ 
                particles: { 
                    number: { 
                      value: 120, 
                        density: { 
                          enable: true, 
                          value_area: 1000,
                          }  
                          }, 
                      }, 
                  }}/> 
            </div>)
          
    
    /*return <div>
            <h1>{data.login}</h1>
            <img src={data.avatar_url} alt=" not found lol"></img>
            <h2>{data.bio}</h2>
            <h3>
            <img src="http://ghchart.rshah.org/ankitbatra22" alt="2016rshah's Github chart" />

            <img src={`http://ghchart.rshah.org/ankitbatra22/${login}`}></img>
          </div> */
                }

  return null;
}



function App(props) {
  return (
    <GitHubUser login='ankitbatra22' />
  );
  }
export default App;
