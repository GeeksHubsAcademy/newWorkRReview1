
import React, {useState, useEffect} from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { bringCharacters } from '../../services/apiCalls';
import './Home.css';

const Home = () => {

    //1st step is always look for the Hooks

    //useState is used to create Hooks

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState('');



    //useEffect is used for the lifecycle methods

    // useEffect(()=>{
    //     //This useEffect is going to be executed when the component is mounted for the first time


    // },[]);

    useEffect(()=>{

        if(characters.length === 0){

            //As the array of the hook is empty...I call for the characters
            bringCharacters()
                .then(
                    answer => {
                        
                        setCharacters(answer.data.results);
                    }
                )
                .catch(error => {
                    if(error.response.status === 404){
                        setError("Invalid endpoint call, bad url");
                    }
                });
        }

    },[characters]);


    // useEffect(()=>{
    //     //This useEffect is going to be executed EVERY TIME the a hook changes or the component is updated

    // });

    //2nd step, renders the component

    return(
        <div className='homeDesign'>

            {
                characters.length > 0 &&

                //Time to map the characters.........
                characters.map(monster => {
                    return (
                        <CharacterCard value={monster} key={monster.id}/>
                    )
                })
            }
           
            {error}
        </div>
    )
}

export default Home;