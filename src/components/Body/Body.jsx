
import {Routes, Route} from 'react-router-dom';

import Home from '../../containers/Home/Home';
import Episodes from '../../containers/Episodes/Episodes';
import Locations from '../../containers/Locations/Locations';

const Body = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/episodes' element={<Episodes/>}/>
                <Route path='/locations' element={<Locations/>}/>
            </Routes>
        </>
    )

}

export default Body;