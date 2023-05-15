const { S3 } = require("aws-sdk");
const uuid = require("uuid").v4;

exports.s3Uploadv2 = async (file) => {
  const s3 = new S3();
  const param = {
    Bucket: `${process.env.AWS_BUCKET_NAME}`,
    Key: `uploads/${uuid()}-${file.originalname}`,
    ContentType: "image/jpeg",
    Body: file.buffer,
  };
  console.log(process.env.AWS_BUCKET_NAME);
  return await s3.upload(param).promise();
};
