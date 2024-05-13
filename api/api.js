// All API calls are made here

/**
 * @param {string} url - api endpoint
 * @returns {Promise<any[]>}  an array of products
 * */
export const fetchAllProducts = async (url) => {
	const data = await fetch(url);
	return await data.json();
};
