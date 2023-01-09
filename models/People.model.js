module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      email: String,
      j_kelamin: String,
      umur: Number,
    },
    {
      timestamps: true,
    }
  );

  return mongoose.model("people", schema);
};
