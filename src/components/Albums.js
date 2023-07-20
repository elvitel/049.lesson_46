import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Albums = () => {

    const { id } = useParams();

    const [albums, setAlbums] = useState([]);

    const navigate = useNavigate();

    const fetchAlbums = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())        
        .then(response => setAlbums(response))         
    };  
  
    useEffect(() => {
        fetchAlbums()
    }, [])

    const data = albums.filter(el => el.userId === Number(id));
     
    return (        
        <div>                 
            {data.map(album => (                
                <div key={album.id}>
                    <p>{album.title}</p>
                    <button type='button' onClick={() => {
                        navigate(`/:id/${album.id}`);
                    }}
                    >Photos</button>     
                </div>        
            ))}              
        </div>        
    );
}
  
export default Albums;
  