import fly from "request.js";

function flyPost(url, params, config) {
  let promise = new Promise((resolve, reject) => {
    fly.post(url, params, config).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
  return promise;
}

function flyPostToQs(url, params) {
  let promise = new Promise((resolve, reject) => {
    fly.post(url, qs.stringify(params)).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
  return promise;
}

function flyGet(url, params) {
  let promise = new Promise((resolve, reject) => {
    fly.get(url, {params}).then(response => {
      response.data = response.data || {};
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
  return promise;
}

function flyDelete(url, params) {
  let promise = new Promise((resolve, reject) => {
    fly.delete(url, params).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
  return promise;
}

function flyPut(url, params) {
  let promise = new Promise((resolve, reject) => {
    fly.put(url, params).then(response => {
      resolve(response.data);
    }).catch(err => {
      reject(err);
    });
  });
  return promise;
}

export default {
  post: flyPost,
  postToQs: flyPostToQs,
  get: flyGet,
  delete: flyDelete,
  put: flyPut
};
