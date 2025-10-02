// import logo from './logo.svg';
// import axios from 'axios';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <h1>Hi this is heading</h1>
//     </div>
//   );
// }

// export default App;

// import axios from 'axios'
// import React from 'react'

// class App extends React.Component {

//   state = {details: [], }

//   componentDidMount() {

//     let data;
//     axios.get("http://localhost:8000")
//       .then(res => {
//         res.headers("Access-Control-Allow-Origin", "*");
//         data = res.data;
//         this.setState({
//           details: data
//         });
//       })
//       .catch(err => console.log(err));
//   }


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [characters, setCharacters] = useState([]);
//   const [episodes, setEpisodes] = useState([]);

//   useEffect(() => {
    
//     axios.get('http://localhost:8000/character')
//         .then(response => {
//             console.log('Characters Response:', response.data);
//             setCharacters(response.data.results || []);
//         })
//         .catch(error => {
//             console.error('Error fetching characters:', error);
//         });

//     axios.get('http://localhost:8000/episode')
//         .then(response => {
//             console.log('Episodes Response:', response.data);
//             setEpisodes(response.data.results || []);
//         })
//         .catch(error => {
//             console.error('Error fetching episodes:', error);
//         });
//   }, []);


// // now i guess its needed for seperate page if so??? check the youtube video of page in official account that i viewed
// // i think it seprates in aa differnt page wiht calling a route or somthing as in done in views in poll app


//   return (
//       <div>
//           <h1>Rick and Morty Characters and Episodes</h1>

//           <h2>Characters</h2>
//           <table>
//               <thead>
//                   <tr>
//                       <th>ID</th>
//                       <th>Name</th>
//                       <th>Location</th>
//                       <th>Status</th>
//                       <th>Gender</th>
//                       <th>Created Date</th>
//                   </tr>
//               </thead>
//               <tbody>
//                 {characters.map(character => (
//                   <tr key={character.id}>
//                       <td>{character.id}</td>
//                       <td>{character.character_name}</td>
//                       <td>{character.location}</td>
//                       <td>{character.status}</td>
//                       <td>{character.gender}</td>
//                       <td>{new Date(character.character_created_date).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//           </table>

//           <h2>Episodes</h2>
//           <table>
//               <thead>
//                   <tr>
//                       <th>Name</th>
//                       <th>Air Date</th>
//                       <th>Characters in Episode</th>
//                       <th>Created Date</th>
//                   </tr>
//               </thead>
//               <tbody>
//                 {episodes.map(episode => (
//                   <tr key={episode.episode_name}>
//                       <td>{episode.episode_name}</td>
//                       <td>{episode.air_date}</td>
//                       <td>{episode.characters_in_ep.join(', ')}</td>
//                       <td>{new Date(episode.episode_created_date).toLocaleDateString()}</td>
//                   </tr>
//                 ))}
//               </tbody>
//           </table>
//       </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Characters from './Characters'
import Episodes from './Episodes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/character' element={<Characters />} />
          <Route exact path='/episode' element={<Episodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App