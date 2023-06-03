import React from "react"
import Nav from "./Nav"

export default function Ocr() {
	return (
		<>
			<div className='w-full flex justify-center items-center flex-col'>
				<Nav />
			</div>
			<div class='flex flex-col items-center w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg'>
				<form
					class='grid gap-6 w-full'
					action='https://blob-sveltekit.vercel.app/?/upload'
					method='POST'
					enctype='multipart/form-data'
				>
					<div>
						<div class='space-y-1 mb-4'>
							<h2 class='text-xl font-semibold'>Upload a file</h2>
							<p class='text-sm text-gray-500'>
								Accepted formats: .png, .jpg, .gif, .mp4
							</p>
						</div>
						<label
							for='image-upload'
							class='group relative mt-2 flex h-72 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300 bg-white shadow-sm transition-all hover:bg-gray-50'
						>
							<div class='absolute z-[5] h-full w-full rounded-md'>
								<div class=' absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all bg-white opacity-100 hover:bg-gray-50'>
									<svg
										class='scale-100 h-7 w-7 text-gray-500 transition-all duration-75 group-hover:scale-110 group-active:scale-95'
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<path d='M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242'></path>
										<path d='M12 12v9'></path>
										<path d='m16 16-4-4-4 4'></path>
									</svg>
									<p class='mt-2 text-center text-sm text-gray-500'>
										Click to upload.
									</p>
									<p class='mt-2 text-center text-sm text-gray-500'>
										Max file size: 50MB
									</p>
									<span class='sr-only'>Photo upload</span>
								</div>
							</div>
						</label>
						<div class='mt-1 flex rounded-md shadow-sm'>
							<input
								id='image-upload'
								name='image-upload'
								type='file'
								accept='image/*'
								class='sr-only'
							/>
						</div>
					</div>

					<button
						disabled
						class='cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none'
					>
						<p class='text-sm'>Confirm upload</p>
					</button>
				</form>
			</div>
		</>
	)
}
