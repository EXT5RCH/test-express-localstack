import express from "express";
import useLambda from "../services/lambda";
const { invoke } = useLambda();
const router = express.Router();

router.post("/", async (_req, res) => {
  const result = await invoke(
    "arn:aws:lambda:ap-northeast-1:000000000000:function:hello-world"
  );
  res.json(result);
});

export default router;
