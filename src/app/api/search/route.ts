import { NextRequest, NextResponse } from 'next/server';
import { mockLegalDocuments } from '../lib/legalData.ts';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const searchQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  
  const results = mockLegalDocuments.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery) ||
    doc.content.toLowerCase().includes(searchQuery)
  );

  return NextResponse.json({ results });
}