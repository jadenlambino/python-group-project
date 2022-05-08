import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPhoto } from "../../store/photo";

const PhotoForm = () => {
	const dispatch = useDispatch()

	const [photoUrl, setPhotoUrl] = useState('')
	const [caption, setCaption] = useState('')
	const [errors, setErrors] = useState([])

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPhoto = {
			photoUrl,
			caption
		}

		const response = await dispatch(uploadPhoto(newPhoto))
		if (response.errors) {
			setErrors(response.errors)
			console.log('these are the errors')
		}
	}

	return (
		<div>
			<ul>
                {errors.map((error, idx) =>
                    <li key={idx}>{error}</li>
                )}
            </ul>
			<form>
				<div>
					<label>Photo Url</label>
					<input
						type="text"
						value={photoUrl}
						onChange={(e) => setPhotoUrl(e.target.value)}
					></input>
				</div>
				<div>
					<label>Caption</label>
					<input
						type="text"
						value={caption}
						onChange={(e) => setCaption(e.target.value)}
					>
					</input>
				</div>
				<div>
					<button type="submit" className='button-style' onClick={handleSubmit}>Submit</button>
				</div>
			</form>
		</div>
	)
}

export default PhotoForm
