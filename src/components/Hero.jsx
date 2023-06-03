import React from "react"
import "./hero.css"
import { logo } from "../assets"

const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
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

			<h1 className='head_text'>
				<span className='orange_gradient '>Doctalyzer</span>
				<br />
				<span className='description'>Analyze Medical Reports</span>
			</h1>
			<h2 className='desc'>
				Doctalyzer analyzes medical reports, empowering you to make informed
				decisions about your health journey.
			</h2>
		</header>
	)
}

export default Hero
