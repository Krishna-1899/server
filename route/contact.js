const express= require("express");
const router = express.Router();

const {getAllWorks,submitResponse} =  require("../controllers/controller");
// imageUpload,vedioUpload,imageReducerUpload,
router.get("/getAllWorks",getAllWorks);
router.post("/submitResponse",submitResponse);
module.exports=router;