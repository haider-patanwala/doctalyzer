import React, { useEffect, useState } from "react"
import { Configuration, OpenAIApi } from "openai"
import Nav from "./Nav"
import Footer from "./Footer"
// export default function Medicalreport() {
// 	return (
// 		<>
// 			<div className='w-full flex justify-center items-center flex-col'>
// 				<Nav />
// 			</div>
// 			<div>
// 				<form className='relative w-full flex-center'>
// 					<input
// 						type='text'
// 						placeholder='Search for a tag or a username'
// 						// value={searchText}
// 						// onChange={handleSearchChange}
// 						required
// 						className='search_input peer w-96 p-3 border-1'
// 					/>
// 				</form>
// 			</div>
// 			<Footer />
// 		</>
// 	)
// }
//

// 	return (
// 		<div>
// 			<input
// 				type='text'
// 				className='search_input peer w-96 p-3 border-1'
// 				value={txt}
// 				onChange={handleInputChange}
// 			/>
// 			<button onClick={handleGenerateList}>Generate Medicine List</button>

// 			{error && <p>Error: {error}</p>}

// 			{Medicalreport.length > 0 && (
// 				<ul>
// 					{Medicalreport.map((medicine, index) => (
// 						<li key={index}>{medicine}</li>
// 					))}
// 				</ul>
// 			)}
// 		</div>
// 	)
// }

// export default Medicalreport

const openai = new OpenAIApi(
	new Configuration({
		apiKey: "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",
	})
)

const messa = `Generate a JSON representation of about result. The JSON should include the following fields:
"Chemical Composition", 
"Uses", 
"Dosage", 
"Side Effects", 
"Route" `

function Medicalreport() {
	const [responseContent, setResponseContent] = useState("")
	const [inputMessage, setInputMessage] = useState("")

	const handleInputChange = (event) => {
		setInputMessage(event.target.value)
	}

	const handleSendMessage = async () => {
		try {
			const response = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: [
					{ role: "system", content: "You" },
					{ role: "user", content: inputMessage + messa },
				],
			})
			setResponseContent(response.data.choices[0].message.content)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		handleSendMessage()
	}, [])

	return (
		<>
			<Nav />

			{/* Hero Section */}
			<div className='w-full flex justify-center items-center flex-col mb-10'>
				<h1 className='head_text'>
					<span className='orange_gradient '>Doctalyzer</span>
					<br />
					{/* <span className='description'>Analyze Medical Reports</span> */}
				</h1>
				<h2 className='desc'>
					This tool will tell you about the usage and information of medicines.
				</h2>

				<div className='flex flex-row justify-around mt-5'>
					<div className='rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'>
						Aspirin
					</div>
					<div className='rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'>
						DOLO 65
					</div>
					<div className='rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'>
						Crocin
					</div>
					<div className='rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'>
						i-Pill
					</div>
				</div>
				<div className='flex flex-row justify-around mt-5'>
					<div className='rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'>
						Combiflame
					</div>
					<div className='rounded-full bg-white border-solid border-2 border-orange-500 px-5 mx-2'>
						Diclofanac
					</div>
				</div>
			</div>

			{/* //////Hero Ends */}

			<div className='flex flex-col'>
				<input
					placeholder='Search for a medicine'
					type='text'
					className='w-96 p-3 rounded-md border'
					value={inputMessage}
					onChange={handleInputChange}
				/>
				<button
					style={{ backgroundColor: "#eb5c0c" }}
					onClick={handleSendMessage}
					className='my-5 border-gray-200 text-white flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
				>
					Send
				</button>
			</div>
			<h1>{responseContent}</h1>
			{console.log(responseContent)}
			<Footer />
		</>
	)
}

export default Medicalreport
