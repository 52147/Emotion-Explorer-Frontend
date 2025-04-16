import { NextResponse } from 'next/server';
import { pipeline } from '@xenova/transformers';

let classifier;

export async function POST(req) {
  const { text } = await req.json();
  if (!text) {
    return NextResponse.json({ error: 'No text provided' }, { status: 400 });
  }

  // Lazy-load Xenova sentiment model
  if (!classifier) {
    classifier = await pipeline(
      'text-classification',
      'Xenova/bert-base-multilingual-uncased-sentiment'
    );
  }

  const result = await classifier(text);
  const label = result[0].label.toLowerCase(); // e.g., "1 star", "5 stars"

  let emotion = 'neutral';

  if (label.includes('1') || label.includes('2')) {
    emotion = 'sad';
  } else if (label.includes('4') || label.includes('5')) {
    emotion = 'happy';
  } else {
    emotion = 'neutral';
  }

  return NextResponse.json({ emotion });
}