// Footer — compact, dark bg; hairline rules; tiny disclaimer.

const footStyles = {
  wrap: { background: '#080E23', color: '#FDFCFA', padding: '80px 0 40px', borderTop: '1px solid rgba(253,252,250,0.1)' },
  grid: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48 },
  col: { display: 'grid', gap: 10 },
  head: { fontFamily: 'var(--font-primary)', fontWeight: 600, fontSize: 12, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#D6D5BF', margin: '0 0 6px' },
  link: { color: '#FDFCFA', opacity: 0.85, fontSize: 14, textDecoration: 'none', cursor: 'pointer' },
  foot: { marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(253,252,250,0.15)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#D6D5BF' },
  disclaimer: { fontSize: 11, color: '#D6D5BF', lineHeight: 1.6, maxWidth: '72ch', marginTop: 12 },
};

function Footer() {
  return (
    <footer style={footStyles.wrap}>
      <div className="container">
        <div style={footStyles.grid}>
          <div style={{color:'#FDFCFA'}}>
            <Logo width={96}/>
            <p style={{fontFamily:'var(--font-secondary)', fontWeight:300, fontSize:22, lineHeight:1.15, letterSpacing:'0.01em', margin:'24px 0 0', maxWidth:'24ch'}}>
              Forging new paths in alternative investing.
            </p>
          </div>
          <div style={footStyles.col}>
            <h5 style={footStyles.head}>Solutions</h5>
            <a style={footStyles.link}>Digital Asset Solutions</a>
            <a style={footStyles.link}>Active Investment Solutions</a>
            <a style={footStyles.link}>Yield Solutions</a>
          </div>
          <div style={footStyles.col}>
            <h5 style={footStyles.head}>Company</h5>
            <a style={footStyles.link}>About</a>
            <a style={footStyles.link}>Insights</a>
            <a style={footStyles.link}>Careers</a>
            <a style={footStyles.link}>Press</a>
          </div>
          <div style={footStyles.col}>
            <h5 style={footStyles.head}>Contact</h5>
            <span style={{fontSize:14, opacity:.85}}>161 Bay Street, Suite 2700<br/>Toronto, Ontario M5J 2S1</span>
            <a style={footStyles.link}>+1 (416) 639-2130</a>
          </div>
        </div>
        <div style={footStyles.disclaimer}>
          This communication is for informational purposes only and does not constitute investment advice or an offer to sell or solicitation to buy any security. Investing in digital assets involves risks. Please read all offering documents carefully before investing.
        </div>
        <div style={footStyles.foot}>
          <span>© 2026 3iQ Corp. All rights reserved.</span>
          <span>Toronto · Dubai · New York</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
