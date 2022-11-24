
import React from 'react';
import {useNavigate} from 'react-router-dom';
import './CharacterCard.css';
 
const CharacterCard = ({value}) => {

    const navigate = useNavigate();

    const goDetail = () => {
        
        setTimeout(()=>{

            navigate("/detail");
        },200)
    };

     return (
         <div className='characterCardDesign' onClick={()=>goDetail()}>
            <div className='characterCardTop'>
                <img className='avatarDesign' src={value.image} alt={value.name}/>
            </div>
            <div className='characterCardMiddle'>{value.name}</div>
            <div className='characterCardBottom'>{value.species}</div>
        </div>
     )
}
export default CharacterCard;