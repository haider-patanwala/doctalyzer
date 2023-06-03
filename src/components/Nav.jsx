import React from "react"
import "./hero.css"
import { logo } from "../assets"

const Nav = () => {
	return (
		<nav className='flex justify-between items-center w-full mb-10 pt-3'>
			<img src={logo} alt='sumz_logo' className='logo object-contain' />

			<button
				type='button'
				onClick={() =>
					window.open("https://github.com/TidbitsJS/Summize", "_blank")
				}
				className='black_btn'
			>
				GitHub
			</button>
		</nav>
	)
}

export default Nav
