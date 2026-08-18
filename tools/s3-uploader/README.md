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

## Setup

```bash
cd tools/s3-uploader
npm install
cp .env.example .env
# fill in S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_BUCKET, S3_REGION
npm start
```

Open http://localhost:5757 (or whatever `PORT` you set).

See `.env.example` for optional settings: `S3_ENDPOINT` (non-AWS S3-compatible
storage), `S3_PREFIX` (folder new uploads land in), `S3_SCOPE_PREFIX`
(restrict browsing to one folder — useful if sharing a bucket with Strapi).
