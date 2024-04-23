const { model, Schema } = require("mongoose");

const FormSchema = new Schema({
  patientName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const FormModel = model("form", FormSchema);

module.exports = FormModel;

module.exports.createAppointment = ({ patientName, gender, age, date, time }) =>
  FormModel.create({
    patientName,
    gender,
    age,
    date,
    time,
  });

module.exports.fetchAppointments = () => FormModel.find();

module.exports.fetchAppointmentById = (_id) => FormModel.find({ _id });

module.exports.updateAppointmentById = (_id, updatedata) =>
  FormModel.findByIdAndUpdate(_id, updatedata, {
    new: true,
    runValidators: true,
  });

module.exports.removeAppoinmentById = (_id) => FormModel.findByIdAndDelete(_id);
