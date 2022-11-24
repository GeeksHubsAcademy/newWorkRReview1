
import {Routes, Route} from 'react-router-dom';

import Home from '../../containers/Home/Home';
import Episodes from '../../containers/Episodes/Episodes';
import Locations from '../../containers/Locations/Locations';
import CharacterDetail from '../../containers/CharacterDetail/CharacterDetail';

const Body = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/episodes' element={<Episodes/>}/>
                <Route path='/locations' element={<Locations/>}/>
                <Route path='/detail' element={<CharacterDetail/>}/>
            </Routes>
        </>
    )

}

export default Body;