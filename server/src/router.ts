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

router.get("/api/manufacturers", manufacturerActions.browse);
router.get("/api/manufacturers/:id", manufacturerActions.read);
router.post("/api/manufacturers", manufacturerActions.add);

router.get("/api/weapons", weaponsActions.browse);
router.get("/api/weapons/:id", weaponsActions.read);
router.post("/api/weapons", weaponsActions.add);

/* ************************************************************************* */

export default router;
