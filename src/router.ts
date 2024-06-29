import { Router } from "express";

const router = Router();

/**
 * PRODUCT ROUTES
 */

router.get("/product", (req, res) => {
  res.json({ message: req.shhhhh_secret });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product/", () => {});
router.delete("/product/:id", () => {});

/**
 * UPDATE ROUTES
 */

router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.delete("/update/:id", () => {});

/**
 * UPDATE POINTS ROUTES
 */

router.get("/updatepointpoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint/", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
