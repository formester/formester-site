/** "Jan 5, 2026" style; tolerates "YYYY-MM-DD HH:MM" by falling back to the date part. */
export const formatDate = (date) => {
  let parsed = new Date(date);
  if (isNaN(parsed)) parsed = new Date(String(date).split(" ")[0]);
  return parsed.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};
