export const truncate = (text = "", max = 120) => {
  if (!text) return "";
  return text.length > max ? text.substring(0, max) + "..." : text;
};
