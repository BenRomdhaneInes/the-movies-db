import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSetting } from '../../utils/context'
import NavigationDropdown from './navigation-dropdown';
import './style.scss'
const Navigation = ({items}) => {
  const navigate = useNavigate()
  const {favList} = useContext(AppSetting)
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <div className="navigation bg-primary">
      <div className="md:container md:mx-auto px-4 py-2 flex justify-between	">
      <div className="logo cursor-pointer" onClick={()=>{navigate(`/`)}}>
        <h1 className='text-white font-bold text-3xl'>The Movies DB</h1>
      </div>
      <div className="navigation-modules">
        {items?.map((item, index) => <button key={index} onClick={item.onClick}>{item.label}</button>)}
      </div>
      
      <div className="navigation-dropdown-wrapper">
        <div className="navigation-dropdown-btn" onClick={() => setOpenDropdown(true)}>
        <span className="material-icons text-white">{favList?.length > 0 ? 'favorite' : 'favorite_border'}</span>
        {favList?.length > 0 && <span className='count text-white bg-accent'>{favList?.length}</span>}
        
        </div>
        {openDropdown && <NavigationDropdown list={favList} handleClickOutside={() => setOpenDropdown(false)} />}
      </div>
        
      </div>
    </div>
  )
}

export default Navigation