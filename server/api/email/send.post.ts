
// import { defineEventHandler } from '#imports'
import { ref }                from 'vue'
import nodemailer             from 'nodemailer'
export default defineEventHandler(async (event) => {
	const formData = await readBody(event)
	const response        = ref()
	const defaultResponse = {
		status:  200,
		message: '',
		success: true
	}

	response.value = defaultResponse
	if (formData) {
		/** Check if the "Name" input field is empty */
		if (!formData['user_name']) {
			response.value = {
				status:  400,
				message: 'The \"Name\" field is empty',
				success: false
			}
			/** Check if the "E-Mail" input field */
		} else if (!formData['user_email']) {
			response.value = {
				status:  400,
				message: 'The \"E-Mail\" field is empty',
				success: false
			}
			/** Check if the "Message" input field */
		} else if (!formData['message']) {
			response.value = {
				status:  400,
				message: 'No message was sent',
				success: false
			}
		}
		/** If no data was sent at all */
	} else {
		response.value = {
			status:  400,
			message: 'No data was sent',
			success: false
		}
	}

	if (response.value.status !== 200) {
		return {
			status:  400,
			message: 'Invalid input',
			success: false
		}
	}

	const transporter = nodemailer.createTransport({
		service: 'gmail', // For other servers, use the SMTP's hostname via `host: ...`
		secure:  true, // Depending on your host, you might need to set this to `false`
		auth:    {
			user: 'kolja.nolte@gmail.com',
			pass: 'lgrh svho kqrl jdma'
		}
	})

	const fields = {
		from:    'peter.pan@disney.com',
		to:      'user@website.com',
		subject: 'Nuxt + Node.js Test E-Mail',
		text:    formData['message']
	}

	transporter.sendMail(fields, function (error) {
		/** Let's try to send the email */
		if (error) {
			/** Oh fuck, an error... Let's change the response so our front-end knows about this and add the details */
			response.value = {
				status:  500,
				message: error.message,
				success: false
			}
		} else {
			/** Everything went well 😎. We'll change the response so our front-end gets that information and can use it */
			response.value = {
				status:  200,
				message: 'E-Mail sent successfully',
				success: true
			}
		}
	})

	return response.value
})