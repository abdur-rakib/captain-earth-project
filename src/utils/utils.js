export const required_likes = 1;
export const upgradeLevel = (level) => {
  switch (level) {
    case "commoner":
      return "fascinating";
    case "fascinating":
      return "exceptional";
    case "exceptional":
      return "legend";
    case "legend":
      return "legend";
    default:
      return;
  }
};
