import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/episode/')
            .then(response => {
                console.log('Episodes Response:', response.data);
                setEpisodes(response.data.results || []);
            })
            .catch(error => {
                console.error('Error fetching episodes:', error);
            });
    }, []);

    return (
        <div>
            <h2>Rick and Morty Episodes</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Air Date</th>
                            <th>Characters in Episode</th>
                            <th>Created Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map(episode => (
                        <tr key={episode.episode_name}>
                            <td>{episode.episode_name}</td>
                            <td>{episode.air_date}</td>
                            <td>{episode.characters_in_ep.join(', ')}</td>
                            <td>{new Date(episode.episode_created_date).toLocaleDateString()}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Episodes