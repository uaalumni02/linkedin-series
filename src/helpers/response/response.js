const responseOkCreated = (res, data) => {
  return res.status(201).json({
    success: true,
    message: "added to database",
    data,
  });
};

const responseNotFound = (res) => {
  return res.status(404).json({
    success: false,
    message: "Unable to show response",
  });
};

const responseOk = (res, data) => {
  return res.status(200).json({
    success: true,
    data,
  });
};
const responseOkUserCreated = (res, userdata) => {
  return res.status(201).json({
    success: true,
    message: "user successfully added",
    userdata,
  });
};
const responseBadAuth = (res) => {
  return res.status(401).json({
      success: false,
      message: 'auth failed'
  });
}
const responseServerError = (res) => {
  return res.status(500).json({
      success: false,
      message: "internal server error",
  });
}
const responseBadRquest = (res) => {
  return res.status(400).json({
      success: false,
      message: 'unable to save provided input'
  });
}

export {
  responseOkCreated,
  responseNotFound,
  responseOk,
  responseOkUserCreated,
  responseBadAuth,
  responseServerError, 
  responseBadRquest
};
