// Guild 36 — Formester Originals founding cohort.
//
// This is a manually maintained config. The founding guild is hand-approved,
// so the team controls exactly who gets in — bump `spotsClaimed` each time a
// founder is approved. When spotsClaimed reaches spotsTotal, the pages flip to
// a "full / waitlist" state automatically.
export const guild36 = {
  // Hard cap on founding members. Bounds support load and keeps the cohort
  // small enough that it can't cannibalize the standard plans.
  spotsTotal: 100,

  // How many founders have been approved so far. UPDATE THIS as you approve.
  spotsClaimed: 0,

  // The guild also closes on this date, whichever comes first (spots or time).
  // After this date the public offer expires, but latecomers can still request
  // it by giving Formester a shout-out on social (the "social unlock" flow).
  closesAt: '2026-08-01T23:59:59',

  // How long the $5 founding price is guaranteed.
  priceLockLabel: '2 years',
}
