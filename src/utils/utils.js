export const required_likes = 10;
export const completed_tasks = 6;

export const comp_tasks = (level) => {
  if (level === 0) {
    return 6;
  } else if (level === 1) {
    return 12;
  } else if (level === 2) {
    return 12;
  }
};
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
