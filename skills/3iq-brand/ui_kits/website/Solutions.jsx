// "Our digital asset solutions" section — sky-gradient full-bleed with 2-up white cards.

const solStyles = {
  section: { background: 'linear-gradient(180deg, #C9D7D7, #F4ECE5)', padding: '112px 0' },
  intro: { maxWidth: '44rem', marginBottom: 64 },
  eyebrow: { color: '#080E23', opacity: 0.7 },
  h1: {
    fontFamily: 'var(--font-secondary)', fontWeight: 300,
    fontSize: 'clamp(2.75rem, 4vw, 4rem)', lineHeight: 1.05,
    letterSpacing: '0.01em', margin: '16px 0 24px',
    color: '#080E23', maxWidth: '18ch',
  },
  lede: {
    fontFamily: 'var(--font-primary)', fontWeight: 500,
    fontSize: 17, lineHeight: 1.5, color: '#080E23', maxWidth: '52ch',
  },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 },
  card: {
    background: '#FDFCFA', borderRadius: 16, padding: '40px 36px',
    display: 'grid', gap: 20,
    boxShadow: '0 1px 0 rgba(8,14,35,0.04)',
  },
  cardTitle: {
    fontFamily: 'var(--font-primary)', fontWeight: 700,
    fontSize: 24, lineHeight: 1.15, color: '#080E23', margin: 0,
  },
  cardBody: {
    fontFamily: 'var(--font-primary)', fontWeight: 500,
    fontSize: 15, lineHeight: 1.55, color: '#080E23', margin: 0,
  },
  list: { listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid rgba(8,14,35,0.12)' },
  row: {
    display: 'grid', gridTemplateColumns: '24px 1fr', gap: 14,
    padding: '16px 0', borderBottom: '1px solid rgba(8,14,35,0.12)',
    fontSize: 14, lineHeight: 1.5,
  },
};

const checkBox = (bg) => ({
  width: 24, height: 24, background: bg, borderRadius: 4,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
});

function Solutions() {
  return (
    <section style={solStyles.section}>
      <div className="container">
        <div style={solStyles.intro}>
          <div className="eyebrow" style={solStyles.eyebrow}>Our solutions</div>
          <h2 style={solStyles.h1}>Our digital asset solutions</h2>
          <p style={solStyles.lede}>
            We offer a range of passive investment solutions designed to provide
            exposure to the dynamic world of digital assets. Our product suite is
            tailored to meet diverse investor needs and risk profiles.
          </p>
        </div>
        <div style={solStyles.grid}>
          <article style={solStyles.card}>
            <h3 style={solStyles.cardTitle}>Single asset exposure</h3>
            <p style={solStyles.cardBody}>
              Gain focused exposure to leading individual cryptocurrencies through
              our carefully structured investment vehicles.
            </p>
            <ul style={solStyles.list}>
              {[
                'Access major cryptocurrencies through familiar investment structures',
                'Benefit from institutional-grade security and custody solutions',
                'Enjoy the simplicity of regulated exposure without direct ownership',
              ].map((t,i)=>(
                <li key={i} style={solStyles.row}>
                  <span style={checkBox('#D6D5BF')}><Check/></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          <article style={solStyles.card}>
            <h3 style={solStyles.cardTitle}>Multi-asset funds</h3>
            <p style={solStyles.cardBody}>
              For those seeking broader exposure, our diversified funds provide
              access to a curated selection of digital assets.
            </p>
            <ul style={solStyles.list}>
              {[
                'Invest in a diversified portfolio with a single investment',
                'Expert selection and ongoing portfolio management',
                'Potentially reduce volatility through diversification',
              ].map((t,i)=>(
                <li key={i} style={solStyles.row}>
                  <span style={checkBox('#B8C6C6')}><Check/></span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Solutions });
