import React from "react"
import { Link } from "react-router-dom"
import "./card.css"

export default function Card() {
	const cardStyle = {
		backgroundColor: "#F9F7FD",
		width: "250px",
		height: "200px",
		margin: "0 50px 0 0",
		borderRadius: "5px",
		border: "1px solid rgb(209 213 219)",
	}

	const containerStyle = {
		margin: "50px 0 0 0",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
	}

	return (
		<div style={containerStyle}>
			<div style={cardStyle}>
				<div>
					<img
						src={require("../src/assets/upload.png").default}
						alt='upload'
						className='card-img object-fit'
					/>
				</div>
				<h1>Upload</h1>
				<Link to='/ocr'>Click Me</Link>
			</div>
			<div style={cardStyle}>
				<h1>Medical Report</h1>
				<Link to='/medical'>Click Me</Link>
			</div>
		</div>
	)
}
