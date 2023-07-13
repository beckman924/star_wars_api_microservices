const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: {
    type: String,
    required: true,
  },
  opening_crawl: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  characters: [
    {
      type: String,
      required: true,
      ref: "Character",
    },
  ],
  planets: [
    {
      type: String,
      required: true,
      ref: "Planet",
    },
  ],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmSchema;
