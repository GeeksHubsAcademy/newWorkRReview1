
import React from 'react';
import { bringSingleCharacter } from '../../services/apiCalls';
import './LocationCard.css';
 
const LocationCard = ({location}) => {

    const paintSingleCharacter = (eachOne) => {

        bringSingleCharacter(eachOne)
            .then(
                result => {
                    console.log(result)
                }
            )
            .catch(error => console.log(error))
    }

     return (
         <div className='locationCardDesign'>
            <div>Name : {location.name}</div>
            <div>Type : {location.type}</div>
            <div>Dimension : {location.dimension}</div>

            {/* Here I will map residents..... */}

            {
                <div>{
                    
                    location.residents.slice(0,5).map(
                        eachOne => {
                            return(
                                <div>{paintSingleCharacter(eachOne)}</div>
                            )
                        }
                    )
                    }</div>
            }
         </div>
     )
}
export default LocationCard;