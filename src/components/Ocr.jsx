import { useState } from "react"
import Nav from "./Nav"
import Footer from "./Footer"

const API_KEY = "AIzaSyDXoH4e5JOoH3s6dQMMceYvhhygHSqfVWs"

export default function Ocr() {
	const [image, setImage] = useState(null)
	const [text, setText] = useState("")
	const [result, setResult] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	// Convert the image to text using Google Cloud Vision API
	const convertImageToText = async () => {
		event.preventDefault()
		try {
			setIsLoading(true)
			const base64Image = await convertImageToBase64(image)
			const extractedText = await analyzeImage(base64Image)
			console.log(extractedText) // Log the extracted text
			setText(extractedText)
			setResult(extractedText)
		} catch (err) {
			console.log(err)
		} finally {
			setIsLoading(false)
		}
	}

	// Convert the image to base64 format
	const convertImageToBase64 = (image) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => resolve(reader.result.split(",")[1])
			reader.onerror = (error) => reject(error)
			reader.readAsDataURL(image)
		})
	}

	// Analyze the image using Google Cloud Vision API
	const analyzeImage = (base64Image) => {
		const body = JSON.stringify({
			requests: [
				{
					image: {
						content: base64Image,
					},
					features: [
						{
							type: "TEXT_DETECTION",
							maxResults: 10,
						},
					],
				},
			],
		})

		return fetch(
			`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: body,
			}
		)
			.then((response) => response.json())
			.then((data) => {
				const extractedText = data.responses[0]?.textAnnotations[0]?.description
				return extractedText || "No text found."
			})
			.catch((error) => {
				console.error("Error:", error)
			})
	}

	// Handle image change event
	const handleChangeImage = (event) => {
		const selectedImage = event.target.files[0]
		setImage(selectedImage)
	}

	return (
		<>
			<div className='w-full flex justify-center items-center flex-col'>
				<Nav />
			</div>
			<div className='flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<form className='grid gap-6 w-full'>
					<div>
						<div className='space-y-1 mb-4'>
							<h2 className='text-xl font-semibold'>Upload a file</h2>
							<p className='text-sm text-gray-500'>
								Accepted formats: .png, .jpg, .gif, .mp4
							</p>
						</div>
						<label
							htmlFor='image-upload'
							className='group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50'
						>
							<div className='absolute z-[5] h-full w-full rounded-md'>
								<div className='absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all bg-white opacity-100 hover:bg-gray-50'>
									<svg
										className='scale-100 h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95'
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'></path>
										<path d='M12 12v9'></path>
										<path d='m16 16-4-4-4 4'></path>
									</svg>
									<p className='mt-2 text-center text-sm text-gray-500'>
										Click to upload.
									</p>
									<p className='mt-2 text-center text-sm text-gray-500'>
										Max file size: 50MB
									</p>
									<span className='sr-only'>Photo upload</span>
								</div>
							</div>
						</label>
						<div className='mt-1 flex rounded-md shadow-sm'>
							<input
								onChange={handleChangeImage}
								id='image-upload'
								name='image-upload'
								type='file'
								accept='image/*'
								className='hidden'
							/>
						</div>
					</div>

					<button
						onClick={convertImageToText}
						className='border-gray-200 bg-gray-100 text-gray-400 flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
					>
						<p className='text-sm'>Generate report</p>
					</button>
				</form>
			</div>

			<div className='mt-10'>
				<div className='flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
					<div className='mx-20'>
						<div className='space-y-1 mb-4 mx-20'>
							<h2 className='text-xl font-semibold'>Interpreted Report</h2>
						</div>
						{/* <label
              htmlFor="image-upload"
              className="group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50"
            ></label> */}
						<div className='stored-result'>
							{/* Display a loading message while the result is being processed */}
							{isLoading ? <p>Wait for a few seconds...</p> : <p>{result}</p>}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
