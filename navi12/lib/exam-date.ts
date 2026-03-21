export const EXAM_DATE = "2026-06-17T00:00:00";

export function getDaysRemaining() {
  const end = new Date(EXAM_DATE);
  const now = new Date();
  const distance = end.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  return days;
}
