import React from 'react'
import { Link } from 'react-router-dom'

import { AiOutlineUser } from 'react-icons/ai'
import userIcon from '../assets/user_icon.png'

const Header = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<div className='logo'>Movie App</div>
			</Link>
			<div className='user-image'>
				<AiOutlineUser />
			</div>
		</div>
	)
}

export default Header
