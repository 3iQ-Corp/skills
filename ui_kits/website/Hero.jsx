// Hero — dark Forge gradient, split layout: lede + feature grid

const heroStyles = {
  section: {
    background: 'linear-gradient(180deg, #080E23, #4C3D32)',
    color: '#FDFCFA',
    padding: '96px 0 128px',
    minHeight: 'calc(100vh - 80px)',
  },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1.1fr',
    gap: 96, alignItems: 'flex-start',
  },
  eyebrow: { color: '#EDC576' },
  headline: {
    fontFamily: 'var(--font-secondary)', fontWeight: 300,
    fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: '1em',
    letterSpacing: '0.01em',
    margin: '28px 0 0',
    maxWidth: '13ch',
  },
  lede: {
    fontFamily: 'var(--font-primary)', fontWeight: 500,
    fontSize: 18, lineHeight: 1.5,
    color: '#D6D5BF',
    maxWidth: 44, marginTop: 24,
    maxInlineSize: '38ch',
  },
  ctaRow: { marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' },
};

function Hero({ onNavigate }) {
  return (
    <section style={heroStyles.section}>
      <div className="container" style={heroStyles.grid}>
        <div>
          <div className="eyebrow">Institutional digital assets · est. 2012</div>
          <hr className="rule" style={{margin:'16px 0'}}/>
          <h1 style={heroStyles.headline}>Forging new paths in alternative investing.</h1>
          <p style={heroStyles.lede}>
            3iQ pioneers institutional-grade digital asset investment products for
            forward-thinking institutions. Regulated in Canada since 2017, listed
            on the TSX and Nasdaq Dubai.
          </p>
          <div style={heroStyles.ctaRow}>
            <a className="btn btn-primary-dark" onClick={() => onNavigate('solutions')}>
              View our solutions<ArrowUpRight/>
            </a>
            <a className="btn btn-ghost-dark" onClick={() => onNavigate('contact')}>
              Speak to our team<ArrowUpRight/>
            </a>
          </div>
        </div>

        <FeatureGrid/>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
