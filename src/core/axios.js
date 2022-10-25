import axios from 'axios';

axios.defaults.baseURL = process.env.BASE_URL;

export const setupAxiosInterceptors = () => {
	const onRequestSuccess = request => {
		const token = localStorage.getItem('token')
		console.log("token------->", token)
		debugger
		if (token) {
			request.headers = {
				// "X-Auth-Key": email,
				"X-Auth-Secret": token,
				Authorization: `Bearer ${token}`
			}
		}
		// if (userEmail) Object.assign(request.headers, { 'X-SWITCH-USER': userEmail })

		return request
	}

	const onResponseSuccess = response => response;

	const onResponseError = err => {
		const status = err.status || (err.response ? err.response.status : 0);
		if (status === 403 || status === 401) {
			console.log("unautheticated");
		}
		return Promise.reject(err);
	};

	axios.interceptors.request.use(onRequestSuccess);
	axios.interceptors.response.use(onResponseSuccess, onResponseError);
}
