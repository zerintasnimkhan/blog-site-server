const {
  createAppointment,
  fetchAppointments,
  fetchAppointmentById,
  updateAppointmentById,
  removeAppoinmentById,
} = require("../models/form.model");

module.exports.addAppoinment = async (req, res) => {
  try {
    console.log(req.body);
    const { patientName, gender, age, date, time } = req.body;

    if (!patientName || !gender || !age || !date || !time) {
      return res.status(400).json();
    }
    const data = {
      patientName,
      gender,
      age,
      date,
      time,
    };

    const savedAppointment = await createAppointment(data);

    res.status(201).json({ message: "Appointment added", food: savedAppointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.getAllAppointments = async (_req, res) => {
  try {
    const appointments = await fetchAppointments();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await fetchAppointmentById(req.params.id);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.updateAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const appointment = await fetchAppointmentById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ errror: "appointment not found" });
    }

    const updatedata = req.body;
    const updatedFood = await updateAppointmentById(req.params.id, updatedata);

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const appointment = await fetchAppointmentById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ msg: "No appointment found." });
    }
    await removeAppoinmentById(appointmentId);
    return res.status(204).json({ msg: "success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
