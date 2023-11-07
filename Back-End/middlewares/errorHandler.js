const CustomResponse = require("../utils/Response");
const asyncWrapper = require("../utils/asyncWrapper");

module.exports = async (error, req, res, next) => {
  if (error.code == 11000) {
    const collection = error.message
      .split(" ")[5]
      .split(".")[1]
      .slice(0, -1)
      .toUpperCase();
    const key = Object.keys(error.keyPattern)[0];
    const response = new CustomResponse(
      false,
      null,
      error,
      `${collection} with this ${key} Already Exists`
    );
    return res.json(response);
  }
  console.log(error);
  res.status(500).json(new CustomResponse(false, null, error.message));

};
