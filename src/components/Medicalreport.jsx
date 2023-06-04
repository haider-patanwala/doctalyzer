import React, { useState } from "react"
import { Configuration, OpenAIApi } from "openai"
import Nav from "./Nav"
import Footer from "./Footer"

const openai = new OpenAIApi(
	new Configuration({
		apiKey: "--------------",
	})
)

const message = `Generate a JSON representation of about result. The JSON should include the following fields: 
"Uses", 
"Dosage", 
"Side Effects", 
"Route",
"Disclaimer" `

function Medicalreport() {
	const [inputMessage, setInputMessage] = useState("")
	const [isGenerating, setIsGenerating] = useState(false)
	const [resultJSON, setResultJSON] = useState(null)
	const [error, setError] = useState(null)

	const handleInputChange = (event) => {
		setInputMessage(event.target.value)
	}

	const convertImageToText = async () => {
		setIsGenerating(true)
		setError(null)
		try {
			const response = await openai.createChatCompletion({
				model: "gpt-3.5-turbo",
				messages: [
					{ role: "system", content: "You" },
					{ role: "user", content: inputMessage + message },
				],
			})
			const content = response.data.choices[0].message.content
			console.log("Content:", content)
			setResultJSON(JSON.parse(content))
		} catch (error) {
			console.error(error)
			setError("Error occurred during generation")
		}
		setIsGenerating(false)
	}

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
					style={{ backgroundColor: isGenerating ? "grey" : "#eb5c0c" }}
					onClick={convertImageToText}
					className='my-5 border-gray-200 text-white flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
					disabled={isGenerating}
				>
					<p className='text-sm'>
						{isGenerating ? "Generating..." : "Generate report"}
					</p>
				</button>
			</div>
			<div>
				{error && <p>{error}</p>}
				{resultJSON && (
					<div>
						<h3>Uses:</h3>
						<p>{resultJSON.Uses}</p>

						<h3>Dosage:</h3>
						<p>{resultJSON.Dosage}</p>

						<h3>Side Effects:</h3>
						<p>{resultJSON["Side Effects"]}</p>

						<h3>Route:</h3>
						<p>{resultJSON.Route}</p>

						<h3>Disclaimer:</h3>
						<p>{resultJSON.Disclaimer}</p>
					</div>
				)}
			</div>
			<Footer />
		</>
	)
}

export default Medicalreport
