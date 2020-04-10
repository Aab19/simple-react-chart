const messages = {
  204: "data tidak ditemukan",
  403: "anda tidak memiliki akses disini"
}

export default (status = "", message = "", json = "") => {
  let response = {
    status,
    message: message || messages[status]
  }

  if (json) {
    response = Object.assign(response, json)
  }

  return response
}
