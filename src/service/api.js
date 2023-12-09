import axios from "axios";

export const Api = axios.create({
	baseURL: "https://dev.api.goongoonalo.com/v1",
});
