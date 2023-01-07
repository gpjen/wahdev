module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      email: String,
      jenis_kemlamin: String,
      umur: Number,
    },
    {
      timestamp: true,
    }
  );

  return mongoose.model("people", schema);
};
