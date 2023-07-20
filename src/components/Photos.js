import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Photos = () => {

    const { index } = useParams();

    const [photos, setPhotos] = useState([]);

    const fetchPhotos = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())        
        .then(response => setPhotos(response))         
    };  
  
    useEffect(() => {
        fetchPhotos()
    }, [])

    const data = photos.filter(el => el.albumId === Number(index));
         
    return (        
        <div>                 
            {data.map(photo => (                
                <div key={photo.id}>                    
                    <img src={photo.url} alt=''></img>
                </div>        
            ))}              
        </div>        
    );
}
  
export default Photos;
  