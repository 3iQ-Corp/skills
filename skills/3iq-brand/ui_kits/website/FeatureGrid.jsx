// The 2x2 feature grid used in the hero — stand-in dot-line icons + white titles + sand bodies.

const featureStyles = {
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 48px' },
  cell: { display: 'grid', gap: 10 },
  icon: { width: 64, height: 64, marginBottom: 4 },
  title: {
    fontFamily: 'var(--font-primary)', fontWeight: 700,
    fontSize: 20, lineHeight: 1.2, margin: 0, color: '#FDFCFA',
  },
  body: {
    fontFamily: 'var(--font-primary)', fontWeight: 500,
    fontSize: 15, lineHeight: 1.5, margin: 0,
    color: '#D6D5BF', maxWidth: '28ch',
  },
};

const constellations = [
  <g key="1">
    <path d="M12 52L32 36L22 20M32 36L56 16M32 36L46 50" stroke="#FDFCFA" strokeWidth="1"/>
    <path d="M32 36L46 50L56 16" stroke="#EDC576" strokeWidth="1"/>
    <g fill="#FDFCFA"><circle cx="12" cy="52" r="2"/><circle cx="32" cy="36" r="2"/><circle cx="22" cy="20" r="2"/><circle cx="46" cy="50" r="2"/></g>
    <g fill="#EDC576"><circle cx="56" cy="16" r="2"/></g>
  </g>,
  <g key="2">
    <path d="M12 20L28 36L12 52M32 20L48 36L32 52M28 36L44 36" stroke="#FDFCFA" strokeWidth="1"/>
    <path d="M32 20L48 36L32 52" stroke="#EDC576" strokeWidth="1"/>
    <g fill="#EDC576"><circle cx="12" cy="20" r="1.5"/><circle cx="28" cy="36" r="1.5"/><circle cx="12" cy="52" r="1.5"/><circle cx="32" cy="20" r="1.5"/><circle cx="48" cy="36" r="1.5"/><circle cx="32" cy="52" r="1.5"/></g>
  </g>,
  <g key="3">
    <rect x="24" y="24" width="16" height="16" stroke="#EDC576" strokeWidth="1" fill="none"/>
    <path d="M8 32L32 8L56 32L32 56Z" stroke="#FDFCFA" strokeWidth="1" fill="none"/>
    <g fill="#EDC576"><circle cx="8" cy="32" r="1.5"/><circle cx="32" cy="8" r="1.5"/><circle cx="56" cy="32" r="1.5"/><circle cx="32" cy="56" r="1.5"/><circle cx="24" cy="24" r="1.5"/><circle cx="40" cy="24" r="1.5"/><circle cx="24" cy="40" r="1.5"/><circle cx="40" cy="40" r="1.5"/></g>
  </g>,
  <g key="4">
    <circle cx="18" cy="18" r="9" stroke="#FDFCFA" strokeWidth="1" fill="none"/>
    <rect x="36" y="8" width="18" height="18" stroke="#EDC576" strokeWidth="1" fill="none"/>
    <rect x="8" y="38" width="18" height="18" stroke="#FDFCFA" strokeWidth="1" fill="none"/>
    <path d="M36 56L46 38L56 56Z" stroke="#FDFCFA" strokeWidth="1" fill="none"/>
    <g fill="#EDC576"><circle cx="18" cy="9" r="1.5"/><circle cx="27" cy="18" r="1.5"/><circle cx="36" cy="8" r="1.5"/><circle cx="54" cy="8" r="1.5"/><circle cx="54" cy="26" r="1.5"/><circle cx="8" cy="38" r="1.5"/><circle cx="26" cy="56" r="1.5"/><circle cx="36" cy="56" r="1.5"/><circle cx="56" cy="56" r="1.5"/></g>
  </g>,
];

const items = [
  { title: 'Pioneering innovation',    body: 'First to market with regulated crypto investment vehicles.' },
  { title: 'Robust risk management',   body: 'Institutional-grade custody and security measures.' },
  { title: 'Deep expertise',           body: 'Blending traditional finance with blockchain technology insights.' },
  { title: 'Tailored solutions',       body: 'Customised strategies for diverse institutional needs.' },
];

function FeatureGrid() {
  return (
    <div style={featureStyles.grid}>
      {items.map((it, i) => (
        <div key={i} style={featureStyles.cell}>
          <svg style={featureStyles.icon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
            {constellations[i]}
          </svg>
          <h3 style={featureStyles.title}>{it.title}</h3>
          <p style={featureStyles.body}>{it.body}</p>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { FeatureGrid });
