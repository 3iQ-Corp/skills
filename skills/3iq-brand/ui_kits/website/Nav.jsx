// Sticky top nav — dark by default; goes translucent-dark over non-dark sections
// (the brand uses backdrop-blur sparingly on sticky nav, per the visual-foundations doc).

const navStyles = {
  wrap: {
    position: 'sticky', top: 0, zIndex: 50,
    background: 'rgba(8, 14, 35, 0.88)',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(253,252,250,0.08)',
  },
  inner: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 0',
  },
  left: { display: 'flex', alignItems: 'center', gap: 48 },
  links: {
    display: 'flex', gap: 28, listStyle: 'none', padding: 0, margin: 0,
  },
  link: {
    color: '#FDFCFA',
    textDecoration: 'none',
    fontSize: 14, fontWeight: 500,
    display: 'inline-flex', alignItems: 'center', gap: 4,
    cursor: 'pointer',
    transition: 'opacity .2s',
  },
};

function Nav({ current, onNavigate }) {
  const items = [
    { id: 'home',      label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about',     label: 'About' },
    { id: 'insights',  label: 'Insights' },
    { id: 'investors', label: 'Investors' },
  ];
  return (
    <header style={navStyles.wrap}>
      <div className="container" style={navStyles.inner}>
        <div style={navStyles.left}>
          <a onClick={() => onNavigate('home')} style={{color:'#FDFCFA', display:'flex', cursor:'pointer'}}>
            <Logo width={80}/>
          </a>
          <ul style={navStyles.links}>
            {items.map(it => (
              <li key={it.id}>
                <a onClick={() => onNavigate(it.id)}
                   style={{
                     ...navStyles.link,
                     opacity: current === it.id ? 1 : 0.7,
                     borderBottom: current === it.id ? '1px solid #EDC576' : '1px solid transparent',
                     paddingBottom: 3,
                   }}>
                  {it.label}
                  {(it.id === 'solutions' || it.id === 'about') && <Caret/>}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-primary-dark" onClick={() => onNavigate('contact')}>
          Contact us
          <ArrowUpRight/>
        </a>
      </div>
    </header>
  );
}

Object.assign(window, { Nav });
