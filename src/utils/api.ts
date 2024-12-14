import axios, { AxiosInstance } from "axios";

export const HubClient = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
    },
});

export const LabClient = axios.create({
    baseURL: "https://gitlab.com/api/v4/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export const executeAxiosRequest = async (
    client: AxiosInstance,
    url: string,
    method: string,
    data: any,
    params?: any
) => {
    try {
        const response = await client.request({
            url,
            method,
            data,
            params,
        });
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error("Status: " + error.response?.status + " - Axios Error : " + error.response?.data.message);
        } else {
            throw new Error((error as Error).message);
        }
    }
};
