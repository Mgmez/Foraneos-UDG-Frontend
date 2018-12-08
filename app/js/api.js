const host = 'https://api.foraneos-udg.ml/api/';

class API {
  static async get(route, token = undefined) {
    const response = await fetch(`${host}${route}`, {
      method: 'GET',
      headers: {
        token,
      },
    });

    const { status } = response;
    const json = await response.json();

    return {
      status,
      data: json,
    };
  }

  static async post(route, body, token = undefined) {
    const response = await fetch(`${host}${route}`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });

    const status = await response.status;
    const json = await response.json();

    return {
      status,
      data: json,
    };
  }

  static async postFile(route, body, token = undefined) {
    const response = await fetch(`${host}${route}`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });

    const status = await response.status;
    const json = await response.json();

    return {
      status,
      data: json,
    };
  }

  static async update(route, body, token = undefined) {
    const response = await fetch(`${host}${route}`, {
      method: 'PATCH',
      body,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });
    const status = await response.status;
    const json = await response.json();

    return {
      status,
      data: json,
    };
  }

  static async updateFile(route, body, token = undefined) {
    const response = await fetch(`${host}${route}`, {
      method: 'PATCH',
      body,
    });
    const status = await response.status;
    const json = await response.json();

    return {
      status,
      data: json,
    };
  }

  static async delete(route, body = {}, token = undefined) {
    const response = await fetch(`${host}${route}`, {
      method: 'DELETE',
      body,
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    });

    const status = await response.status;
    const json = await response.json();


    return {
      status,
      data: json,
    };
  }
}

export default API;
