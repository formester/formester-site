# Signup attribution cookie

`signup-attribution.js` is kept byte-for-byte identical to the app's `app/javascript/utils/signup-attribution.js`. `tests/fixtures/signup-attribution-contract.json` is a browser-encoded vector that both repos' tests decode.

## Cookie contents

The version 1 encoded cookie holds first and last eligible touches. A touch is either an external referrer or a UTM.

Each touch contains only:

- a validated hostname
- safe UTM values
- a reduced landing path
- a timestamp
- an evidence type

It never stores raw referrer or landing URLs.

## Consent

- **Acceptance** writes the cross-subdomain cookie.
- **Rejection** removes it and the legacy `formester_referrer_data` cookie, and stores `fm_consent=rejected`. The app honours that rejection while it has no consent decision of its own.
- **Not set:** the site does not write the app's `cookie_consent` cookie.

The app validates the same contract when persisting an immutable signup snapshot. See the app's `docs/SIGNUP_ATTRIBUTION.md` for touch policy, signup cohorts and deployment order.
