import { NextRequest, NextResponse } from 'next/server'
import { listObjects } from '@/lib/s3'

export async function GET(req: NextRequest) {
  try {
    const continuationToken = req.nextUrl.searchParams.get('continuationToken')
    const result = await listObjects(continuationToken)
    return NextResponse.json(result)
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 })
  }
}
