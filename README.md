Initial simple architecture: <br/ >
	Resource guide- <br/ >
		Action: POST a form, return search results, only pulling from "accepted : true" objects. <br/ >
		
	Add new- <br/ >
		Action: POST a form with request for submission. Store with JSON field "accepted: false"
			Form will contain email or phone number for contact. <br/ >
		Action: Admin side, GET all objects with "accepted : false". <br/ >
		Action : Admin side, PUT selected object - update accepted to true. Send email or text to user who posted rqeuest.
