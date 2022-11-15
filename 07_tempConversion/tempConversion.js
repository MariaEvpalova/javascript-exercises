const ftoc = function(t_f) {
  return Number(((t_f-32)*5/9).toFixed(1));
};

const ctof = function(t_c) {
  return Number((t_c*9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
