# S3 Uploader

A tiny local-only tool for browsing and uploading files to the S3 bucket
used by this project's images/media. Not part of the Nuxt app — standalone,
own dependencies, runs on your machine only.

- Drag a file in → it uploads to S3 → grid refreshes with the new file.
- Every existing file in the bucket shows as a thumbnail (images) or an
  extension badge (everything else), with a "Copy URL" button.
- Filter by filename with the search box.

AWS credentials stay on this local server process — the browser only talks
to `localhost`, never to S3 directly, so no bucket CORS configuration is
needed.

## Try it locally against MinIO (no real AWS bucket needed)

```bash
cd tools/s3-uploader
docker compose up -d       # starts MinIO + creates the "formester-uploads" bucket
npm install
cp .env.example .env       # already prefilled to match the MinIO setup above
npm start
```

Open http://localhost:5757 — upload/browse against your local MinIO instance.
The MinIO web console (bucket browser, object inspector) is at
http://localhost:9001 (login: `minioadmin` / `minioadmin123`).

## Use with the real S3 bucket

Same steps, minus `docker compose up`: `cp .env.example .env`, then replace
`S3_ACCESS_KEY_ID` / `S3_SECRET_ACCESS_KEY` / `S3_BUCKET` / `S3_REGION` with
the real bucket's values and delete the `S3_ENDPOINT` line (only needed for
non-AWS/local S3-compatible endpoints like MinIO).

See `.env.example` for `S3_PREFIX` — scopes both browsing and new uploads to
one folder, useful if sharing a bucket with Strapi.
