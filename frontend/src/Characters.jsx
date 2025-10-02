import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/character/')
            .then(response => {
                console.log('Characters Response:', response.data);
                setCharacters(response.data.results || []);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }, []);

    return (
        <div>
            <h2>Rick and Morty Characters</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Gender</th>
                            <th>Created Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map(character => (
                        <tr key={character.id}>
                            <td>{character.id}</td>
                            <td>{character.character_name}</td>
                            <td>{character.location}</td>
                            <td>{character.status}</td>
                            <td>{character.gender}</td>
                            <td>{new Date(character.character_created_date).toLocaleDateString()}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Characters