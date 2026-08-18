import { NextResponse } from 'next/server'
import { getBucketLabel } from '@/lib/s3'

export async function GET() {
  try {
    return NextResponse.json({ label: getBucketLabel() })
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 })
  }
}
