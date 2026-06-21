'use client'
export default function AdSlot({ slot, format = 'auto' }: { slot: string; format?: string }) {
  return (
    <div className="ad-container my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
