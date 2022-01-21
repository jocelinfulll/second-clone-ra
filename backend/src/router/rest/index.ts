import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import Busboy from "busboy";
import { uploadFileToS3 } from "../../utils/fileS3";
import { File } from "../../models";
import { ObjectId } from "mongodb";
import config from "../../config";

export const restRouter = Router();

const { pivotFilePath } = config;

restRouter.post(
  "/rest/upload",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const busboy = Busboy({ headers: req.headers });
      const ACCESS_TOKEN_FROM_REQ = "access_token_from_req";
      busboy.on("file", async (_, file, fileName) => {
          console.log("filename", fileName)
          fileName = fileName.filename
        await uploadFileToS3({
          fileName,
          contentStream: file,
          accessToken: ACCESS_TOKEN_FROM_REQ,
        });
        const s3Key = `${pivotFilePath}/${fileName}`;
        await File.create({
            path: s3Key,
            name: fileName,
            type: "xml"
        });
      });
      busboy.on("finish", () => {
        console.log("finished--------");
        res.sendStatus(200);
        res.end();
      });
      req.pipe(busboy);
    } catch (err) {
      console.log(err);
    }
  }
);