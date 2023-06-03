import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Medicalreport() {
	return (
		<>
			<div className='w-full flex justify-center items-center flex-col'>
				<Nav />
			</div>
			<div>
				<form className='relative w-full flex-center'>
					<input
						type='text'
						placeholder='Search for a tag or a username'
						// value={searchText}
						// onChange={handleSearchChange}
						required
						className='search_input peer w-96 p-3 border-1'
					/>
				</form>
			</div>
			<Footer />
		</>
	)
}
