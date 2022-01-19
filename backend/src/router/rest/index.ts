import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import Busboy from "busboy";
import { uploadFileToS3 } from "../../utils/uploadFileToS3";
import { Message_store } from "../../models";
import { ObjectId} from "mongodb";
import config from "../../config";

export const restRouter = Router();

const { pivotFilePath } = config;

restRouter.post(
  "/upload",
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
        const fileId = new ObjectId();
        const s3Key = `${pivotFilePath}/${fileName}`;
        await Message_store.create({
          id: fileId,
          stream_name: `pivotFile:command-${fileId}`,
          type: "save_pivot_file",
          //TODO:remove the hardcrypted
          meta_data: { user_id: "jocelin", file_id: fileId },
          data: {
            file_id: fileId,
            user_id: "jocelin",
            name: fileName,
            path: s3Key,
          },
        });
        console.log('file save and message too')
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
