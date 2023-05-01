import axios from "axios";

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function makeAPIRequst(
	url: string,
	method: ApiMethod = "GET",
	body: any = {},
	isTokenIncluded: boolean = true
): Promise<any> {
	let headers: {
		Authorization?: string;
	} = {};

	if (isTokenIncluded) {
		headers.Authorization = `Bearer ${localStorage.getItem("token") ?? ""}`;
	}

	const response = await axios({
		url: `${process.env.REACT_APP_SERVER_API}/${url}`,
		method: method,
		data: body,
		headers: headers,
	});

	return response;
}
