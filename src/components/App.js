import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './home';
import Navigation from './navigation/navigation'
import DetailsPage from './details-page/details-page'
import { AppSetting } from '../utils/context'

function App() {  
  const [favList, setFavList] = useState([])
  const addToFavList = (newId) => {
    setFavList([...favList, newId])
  }
  const removeFromFavList = (newId) => {
    const result = favList.filter(fav => fav !== newId);
    setFavList(result)
  }
  return (
    <AppSetting.Provider value={{favList, addToFavList, removeFromFavList}}>
      <div className="App bg-light3 antialiased">
        <Navigation/>
        <Routes> 
          <Route path="/" element = {<Home />} />
          <Route path='/details/:itemId' element={<DetailsPage />}/>
        </Routes>
      </div>
    </AppSetting.Provider>
  );
}

export default App;
