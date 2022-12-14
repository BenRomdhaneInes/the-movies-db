import React from 'react'
import onClickOutside from 'react-onclickoutside'
import DetailsCard from '../detail-card/detail-card'

const NavigationDropdown = ({list}) => {
  return(
    <div className="navigation-dropdown-content bg-light2">
      {list.length > 0 ? 
       list.map((item, index) => <DetailsCard key={index} itemId={item} />)
      : <p className="p-3 text-base	text-light1 text-center	">
        <span class="material-icons text-primary">do_not_disturb_alt</span><br/> your which list is empty</p>}
    </div>
  )
}
export default onClickOutside(NavigationDropdown)