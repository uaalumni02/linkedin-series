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
export { responseOkCreated, responseNotFound, responseOk };
