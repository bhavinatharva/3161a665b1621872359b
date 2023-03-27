
const GOOGLE_GEO_CODE_API_KEY = "AIzaSyBYo5s0uQPFgc8qafyO0Rzejpe78bi4ezw"

const doGetCurrentLocation = async (latitude: number, longitude: number) => {
    let address = undefined;
    const params: any = {
        key: GOOGLE_GEO_CODE_API_KEY,
    };
    if (latitude !== 0 && longitude !== 0) {
        params.address = `${latitude},${longitude}`;
        params.radius = 500;
    }
    const urlParams = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join("&");

    let url = `https://maps.googleapis.com/maps/api/geocode/json?` + urlParams;
    const result = await fetch(url);
    const resultJson = await result.json();

    const { results, status, error_message } = resultJson;
    if (status && status === "REQUEST_DENIED") {
        if (error_message && error_message !== "") {
            alert("Something went wrong");
        }

        return address;
    }
    if (results && results.length > 0) {
        const { formatted_address } = results[0];
        console.log('results[0]', JSON.stringify(results[0]))
        if (formatted_address && formatted_address !== "") {
            address = formatted_address;
        }

    }
    return address;
};
export { doGetCurrentLocation }