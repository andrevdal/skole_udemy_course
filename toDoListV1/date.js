exports.getFullNBDate = () => {
  const rightNow = new Date();
  const dateSettings = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  return rightNow.toLocaleDateString("nb-NO", dateSettings);
};
exports.getNBMonth = () => {
  const rightNow = new Date();
  const dateSettings = {
    month: "long",
  };
  return rightNow.toLocaleDateString("nb-NO", dateSettings);
};
console.log(module.exports);
