import axios from "axios";

// const API_BASE_URL = 'http://localhost:3000';

export const fetchData = async (params) => {
    try {
        const response = await axios.post(`/general/get_data`, params, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmbmFtZSI6Ikhhc2hpciIsImxuYW1lIjoiUmFvIiwiZW1haWwiOiJoYXNoaXJyYW9AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcWRaVGxyL3p5QXJ6WEk1UzRpeXgxZTJyRFV6OHFteFNnOFhIR3pTeDZwVEpEL0NqZm5JRi4iLCJkb2IiOiIxOTk1LTA4LTI2VDE5OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDMwNjcwNTY0NTUiLCJpbWdfYWRkcmVzcyI6InVzZXItZGVmYXVsdC5wbmciLCJ0eXBlIjoxLCJzdGF0dXMiOjEsInBhcmVudF9pZCI6IjAiLCJhZGRlZF9vbiI6IjIwMjMtMDktMTNUMTQ6MDM6MjEuNTYxWiIsInVwZGF0ZWRfb24iOiIyMDIzLTEwLTEwVDExOjAwOjE5LjYzNVoiLCJzdXBlcl9wYXJlbnQiOiIwIiwicGF5bWVudF9wbGFuIjoxLCJpc19kZWxldGVkIjpmYWxzZSwicm9sZV9pZCI6MSwiaWF0IjoxNzMzMTQzODM3LCJleHAiOjE3MzMyMzAyMzd9.-00RbLSTThgXRjTlKgnopFqp_RzqeZSUif2jUjzddWE`
            }
        })
        return response.data
    }
    catch (error) {
        console.log("Error fetching data", error)
        throw error;
    }
}