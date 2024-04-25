const { model, Schema } = require("mongoose");

const FormSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tags: {
    type: String,
  },
});

const FormModel = model("form", FormSchema);

module.exports = FormModel;

module.exports.createPost = ({ title, description, date, tags }) =>
  FormModel.create({
    title,
    description,
    date,
    tags,
  });

module.exports.fetchPosts = () => FormModel.find();

module.exports.fetchPostById = (_id) => FormModel.find({ _id });

