import express from "express";
const router = express.Router();

router.get("/", (_req, res) => {
  res.json("Hello, world!");
});

export default router;
