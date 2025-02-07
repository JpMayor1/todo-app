import axiosInstance from "../../axios/axiosInstance"

export const registerApi = async (username: string, password: string) => {
    const response = axiosInstance.post("/api/register", {
        username,
        password
    })

    return response
}