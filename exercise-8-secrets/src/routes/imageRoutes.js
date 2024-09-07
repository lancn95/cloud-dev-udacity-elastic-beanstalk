import express from "express";
import uploadImage from "../middleware/uploadImageToS3Middleware.js";
export const router = express.Router();

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env['AWS_ACCESS_KEY_ID'],
        secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
    },
    region: process.env['AWS_REGION']
})

router.post("/", uploadImage.single('file'), async (req, res) => {
    if(req.file){
        res.status(201).json({url: req.file.location});
    } else {
        console.error('S3 upload failed', req)
        res.status(500).send('Image upload failed')
    }
});

router.get('/', async (req, res) => {
    const key  = req.query.key; // key from response upload api
    const downloadParams = {
      Bucket: process.env['AWS_S3_BUCKET_NAME'],
      Key: key, // The key for the file to download
    };
    if ( !key ) {
        res.status(400).json({ message: 'key id is required' });
      }
  
    try {
      // Get the file from S3
      const data = await s3.send(new GetObjectCommand(downloadParams));
  
      res.setHeader('Content-Type', data.ContentType);
      res.setHeader('Content-Disposition', `attachment; filename=${key}`);
      
      const stream = data.Body;
      stream.pipe(res);
      
    } catch (error) {
      res.status(500).json({ message: 'Error downloading the file' });
    }
  });