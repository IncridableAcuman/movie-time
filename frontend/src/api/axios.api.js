import axios from 'axios'

const axiosInstnace = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8080/api"
})

axiosInstnace.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    (error) => Promise.reject(error)
)

axiosInstnace.interceptors.response.use(
    config => config,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { data } = await axiosInstnace.get("/auth/refresh")
                if (data) {
                    localStorage.setItem('accessToken', data.accessToken);
                    originalRequest.headers['Authorization'] = `Bearer ${data.accessToken}`;
                }
                return axiosInstnace(originalRequest);
            } catch (error) {
                console.log(error);
                localStorage.clear();
                window.location.href = "/auth"
            }
        }
    }
)

export default axiosInstnace;