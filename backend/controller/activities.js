const getAllActivities = (req, res) => {
  const allActivities = {
    one: {
      id: 1,
      title: "one",
      desc: "activity one",
    },
  };

  res.send({
    data: allActivities,
  });
};

export { getAllActivities };
