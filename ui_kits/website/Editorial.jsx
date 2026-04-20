// Editorial split — cream gradient · big lede headline + 2-col body

const edStyles = {
  section: { background: 'linear-gradient(180deg, #EAE9DD, #FDFCFA)', padding: '128px 0', color: '#080E23' },
  grid: { display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 96, alignItems: 'flex-start' },
  h1: {
    fontFamily: 'var(--font-secondary)', fontWeight: 300,
    fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1,
    letterSpacing: '0.01em', margin: 0, maxWidth: '14ch',
  },
  detail: { display: 'grid', gap: 40, paddingTop: 40 },
  subWrap: { paddingTop: 24, borderTop: '1px solid rgba(8,14,35,0.25)' },
  h2: {
    fontFamily: 'var(--font-secondary)', fontWeight: 300,
    fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)', lineHeight: 1.1,
    letterSpacing: '0.01em', margin: 0, maxWidth: '22ch',
  },
  body: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
    fontFamily: 'var(--font-primary)', fontWeight: 500,
    fontSize: 15, lineHeight: 1.55,
  },
  footLink: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '16px 0', borderTop: '1px solid rgba(8,14,35,0.25)',
    textDecoration: 'none', color: '#080E23', fontWeight: 600, fontSize: 14,
    cursor: 'pointer',
  },
};

function Editorial() {
  return (
    <section style={edStyles.section}>
      <div className="container" style={edStyles.grid}>
        <h2 style={edStyles.h1}>We believe digital asset investing can change the world</h2>
        <div style={edStyles.detail}>
          <div style={edStyles.subWrap}>
            <h3 style={edStyles.h2}>And we're willing to stand up for what we believe in</h3>
          </div>
          <div style={edStyles.body}>
            <div>
              <p style={{margin:'0 0 16px'}}>As an alternative investment firm, we've always looked for ways to help investors diversify their portfolios and grow their returns. In 2014 we recognised that digital assets had the potential to transform the economy — but there wasn't a safe, accessible way to invest in them.</p>
              <p style={{margin:0}}>We led the charge to achieve comprehensive regulation for digital assets in Canada, and launched a suite of</p>
            </div>
            <div>
              <p style={{margin:'0 0 16px'}}>secure, compliant, tax-advantageous products that offer institutional investors a safe, simple way to invest in digital assets.</p>
              <p style={{margin:0}}>Today, we're a leader in the industry — navigating regulations around the world and continuing our legacy of innovation with every product we develop.</p>
            </div>
          </div>
          <a style={edStyles.footLink}>
            <span>Industry recognition</span>
            <ArrowUpRight/>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Editorial });
