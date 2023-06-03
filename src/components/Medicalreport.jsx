import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Medicalreport() {
	return (
		<>
			<div className='w-full flex justify-center items-center flex-col'>
				<Nav />
			</div>
			<div>Medical report</div>
			<Footer />
		</>
	)
}
