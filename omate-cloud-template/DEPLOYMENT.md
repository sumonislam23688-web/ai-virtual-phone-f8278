# OMate Cloud — GitHub deployment setup

> This is the staging branch, not a tested one-click deployment link. Do not merge this workflow into the unrelated AI Phone application's main branch.

## For the dedicated OMate repository

1. Create a new, empty GitHub repository dedicated to OMate Cloud.
2. Copy the **contents** of `omate-cloud-template/` to the new repository root, so that `supabase/config.toml`, `supabase/migrations/` and `supabase/functions/` are at the root.
3. Copy `.github/workflows/deploy-omate-cloud.yml` to the new repository and **remove** its `defaults.run.working-directory: omate-cloud-template` setting, since the Supabase folder is now at the root.
4. In Supabase, create a new project. In GitHub repo Settings → Secrets and variables → Actions, create **repository secrets** `SUPABASE_ACCESS_TOKEN`, `SUPABASE_DB_PASSWORD`, and `SUPABASE_PROJECT_ID`. Never paste these into source files.
5. In the new GitHub repository, open Actions → Deploy OMate Cloud to Supabase → Run workflow.
6. Check all jobs and confirm the four functions are ACTIVE in Supabase. Then connect LivePage using that project's URL and publishable key. Do not expose the service_role key.

## Verified vs not yet verified

- Tested on a separate free Supabase project: both SQL migrations applied; 5 tables with RLS and 12 policies created; 4 Edge Functions deployed and ACTIVE.
- Not yet tested: a GitHub Actions run using repository secrets, end-to-end authenticated API calls, vector embedding integration, LivePage chat syncing.
- Never deploy against the original production Supabase project when testing.
