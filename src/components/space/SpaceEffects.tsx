import './SpaceEffects.css'

export default function SpaceEffects() {
  return (
    <div className="space-effects" aria-hidden="true">
      {/* =====================================================
          METEOR BURST A
          ===================================================== */}

      <span className="global-meteor meteor-a meteor-a1" />
      <span className="global-meteor meteor-a meteor-a2" />
      <span className="global-meteor meteor-a meteor-a3" />

      {/* =====================================================
          METEOR BURST B
          ===================================================== */}

      <span className="global-meteor meteor-b meteor-b1" />
      <span className="global-meteor meteor-b meteor-b2" />
      <span className="global-meteor meteor-b meteor-b3" />

      {/* =====================================================
          METEOR BURST C
          ===================================================== */}

      <span className="global-meteor meteor-c meteor-c1" />
      <span className="global-meteor meteor-c meteor-c2" />
      <span className="global-meteor meteor-c meteor-c3" />
    </div>
  )
}
