export const required_likes = 10;
export const completed_tasks = 6;
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