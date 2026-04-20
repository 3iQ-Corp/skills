// Final CTA — Warmth gradient section with a numbered 01-05 firsts grid + CTA row.

const ctaStyles = {
  section: { background: 'linear-gradient(180deg, #080E23, #4C3D32)', color: '#FDFCFA', padding: '112px 0' },
  intro: { maxWidth: '60rem', marginBottom: 56 },
  h2: {
    fontFamily: 'var(--font-secondary)', fontWeight: 300,
    fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1.05,
    letterSpacing: '0.01em', margin: '16px 0 0', maxWidth: '18ch',
  },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 32,
    padding: '32px 0', borderTop: '1px solid rgba(253,252,250,0.25)',
  },
  num: {
    fontFamily: 'var(--font-secondary)', fontWeight: 300,
    fontSize: 40, lineHeight: 1, letterSpacing: '0.01em',
    color: '#FDFCFA',
  },
  numRule: { height: 2, width: 32, background: '#EDC576', margin: '12px 0' },
  title: { fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: 15, margin: '0 0 6px' },
  body:  { fontFamily: 'var(--font-primary)', fontWeight: 500, fontSize: 13, lineHeight: 1.5, color: '#D6D5BF', margin: 0 },
  ctaRow: { display: 'flex', justifyContent: 'flex-end', marginTop: 48 },
};

const firsts = [
  { yr: '2017', t: 'First DAIFM',       b: 'Regulated Digital Asset Investment Fund Manager in Canada.' },
  { yr: '2020', t: 'First NA funds',    b: 'Exchange-listed Bitcoin & Ether funds — first major in North America.' },
  { yr: '2021', t: 'First in UAE',      b: 'Bitcoin-based fund listed on Nasdaq Dubai.' },
  { yr: '2023', t: 'First ETH staking', b: 'The world\u2019s first ETH staking ETF.' },
  { yr: '2026', t: 'Bank-backed ETF',   b: 'First Canadian commercial-bank-backed actively managed ETF.' },
];

function CTA({ onNavigate }) {
  return (
    <section style={ctaStyles.section}>
      <div className="container">
        <div style={ctaStyles.intro}>
          <div className="eyebrow">A history of firsts</div>
          <hr className="rule" style={{margin:'12px 0'}}/>
          <h2 style={ctaStyles.h2}>Pioneering digital asset investment management since 2012.</h2>
        </div>
        <div style={ctaStyles.grid}>
          {firsts.map((f,i)=>(
            <div key={i}>
              <div style={ctaStyles.num}>{String(i+1).padStart(2,'0')}</div>
              <div style={ctaStyles.numRule}/>
              <div className="eyebrow" style={{color:'#EDC576', marginBottom:4}}>{f.yr}</div>
              <h4 style={ctaStyles.title}>{f.t}</h4>
              <p style={ctaStyles.body}>{f.b}</p>
            </div>
          ))}
        </div>
        <div style={ctaStyles.ctaRow}>
          <a className="btn btn-primary-dark" onClick={() => onNavigate('contact')}>
            Speak to our team<ArrowUpRight/>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CTA });
