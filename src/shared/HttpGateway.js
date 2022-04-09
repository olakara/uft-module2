export default class HttpGateway {
  get = async (path) => {
    const response = await fetch(path);
    const result = response.json();
    return result;
  };

  post = async (path, payload) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    };

    const response = await fetch(path, options);
    const result = response.json();
    return result;
  };
}
