const router = require("express").Router();

const formController = require("../controllers/form.controller");

router.post("/add", formController.addAppoinment);
router.get("/all", formController.getAllAppointments);
router.get("/fetch/:id", formController.getAppointmentById);
router.patch("/update/:id", formController.updateAppointment);
router.delete("/remove/:id", formController.deleteAppointment);

module.exports = router;