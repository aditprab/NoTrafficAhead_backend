Initial simple architecture:
	Resource guide- 
		Action: POST a form, return search results, only pulling from "accepted : true" objects. 
	Add new-
		Action: POST a form with request for submission. Store with JSON field "accepted: false"
			Form will contain email or phone number for contact.
		Action: Admin side, GET all objects with "accepted : false". 
		Action : Admin side, PUT selected object - update accepted to true. Send email or text to user who posted rqeuest.

