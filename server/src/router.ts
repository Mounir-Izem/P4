import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import categoriesActions from "./modules/categories/categoriesActions";
import manufacturerActions from "./modules/manufacturers/manufacturerActions";
import weaponsActions from "./modules/weapons/weaponsActions";

router.get("/api/categories/", categoriesActions.browse);
router.get("/api/categories/:id", categoriesActions.read);
router.post("/api/categories", categoriesActions.add);
router.put("/api/categories/:id", categoriesActions.edit);
router.delete("/api/categories/:id", categoriesActions.destroy);

router.get("/api/manufacturers", manufacturerActions.browse);
router.get("/api/manufacturers/:id", manufacturerActions.read);
router.post("/api/manufacturers", manufacturerActions.add);
router.put("/api/manufacturers/:id", manufacturerActions.edit);
router.delete("/api/manufacturers/:id", manufacturerActions.destroy);

router.get("/api/weapons", weaponsActions.browse);
router.get("/api/weapons/:id", weaponsActions.read);
router.post("/api/weapons", weaponsActions.add);
router.put("/api/weapons/:id", weaponsActions.edit);
router.delete("/api/weapons/:id", weaponsActions.destroy);

/* ************************************************************************* */

export default router;
