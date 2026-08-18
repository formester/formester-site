import { NextRequest, NextResponse } from 'next/server'
import { uploadObject } from '@/lib/s3'

export async function POST(req: NextRequest) {
  try {
    const filename = req.nextUrl.searchParams.get('filename')
    if (!filename) {
      return NextResponse.json({ error: 'Missing "filename" query param' }, { status: 400 })
    }
    const body = await req.arrayBuffer()
    const result = await uploadObject(filename, body, req.headers.get('content-type'))
    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 })
  }
}
