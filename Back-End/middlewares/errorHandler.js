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
  
  else if (error.name=="ValidationError"){
    const feilds=Object.keys(error.errors)
    const validationErrors=[]
    feilds.forEach((value)=>{
      validationErrors.push(`${error.errors[value].message}`);
    })
    return res.json(new CustomResponse(false,null,validationErrors,"Validation Error Occured!"))

  //  console.log(JSON.stringify(error.errors.mobile.message));
  }
  console.log(error);
  res.status(500).json(new CustomResponse(false, null, error.message));

};
