// Top-level composition — simple state-based click-through nav

const { useState } = React;

function App() {
  const [page, setPage] = useState('home');
  return (
    <>
      <Nav current={page} onNavigate={setPage}/>
      {page === 'home'     && <><Hero onNavigate={setPage}/><Solutions/><Editorial/><CTA onNavigate={setPage}/><Footer/></>}
      {page === 'solutions'&& <><Solutions/><CTA onNavigate={setPage}/><Footer/></>}
      {page === 'about'    && <><Editorial/><CTA onNavigate={setPage}/><Footer/></>}
      {page === 'insights' && <><CTA onNavigate={setPage}/><Footer/></>}
      {page === 'investors'&& <><CTA onNavigate={setPage}/><Footer/></>}
      {page === 'contact'  && <ContactStub onNavigate={setPage}/>}
    </>
  );
}

function ContactStub({ onNavigate }) {
  return (
    <section style={{background:'linear-gradient(180deg, #080E23, #4C3D32)', color:'#FDFCFA', padding:'128px 0', minHeight:'80vh'}}>
      <div className="container">
        <div className="eyebrow">Institutional enquiries</div>
        <hr className="rule" style={{margin:'12px 0'}}/>
        <h1 style={{fontFamily:'var(--font-secondary)', fontWeight:300, fontSize:'clamp(3rem,6vw,5.5rem)', lineHeight:1, margin:'0 0 24px', maxWidth:'14ch', letterSpacing:'0.01em'}}>
          Speak to our team.
        </h1>
        <p style={{fontFamily:'var(--font-primary)', fontWeight:500, fontSize:18, lineHeight:1.5, color:'#D6D5BF', maxWidth:'48ch'}}>
          Get in touch with 3iQ to discuss institutional allocation, product structure, and regulatory jurisdictions.
        </p>
        <form style={{marginTop:48, display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, maxWidth:720}}
              onSubmit={e=>{e.preventDefault(); onNavigate('home');}}>
          <Field label="Name"/>
          <Field label="Firm"/>
          <Field label="Email"/>
          <Field label="Jurisdiction"/>
          <div style={{gridColumn:'1 / -1'}}>
            <Field label="Message" tall/>
          </div>
          <div style={{gridColumn:'1 / -1', display:'flex', justifyContent:'flex-end', marginTop:8}}>
            <button type="submit" className="btn btn-primary-dark">Send enquiry<ArrowUpRight/></button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, tall }) {
  return (
    <label style={{display:'grid', gap:8}}>
      <span className="eyebrow" style={{color:'#D6D5BF'}}>{label}</span>
      {tall
        ? <textarea rows={4} style={{background:'transparent', border:0, borderBottom:'1px solid rgba(253,252,250,0.35)', color:'#FDFCFA', fontFamily:'var(--font-primary)', fontSize:16, padding:'8px 0', outline:'none', resize:'vertical'}}/>
        : <input style={{background:'transparent', border:0, borderBottom:'1px solid rgba(253,252,250,0.35)', color:'#FDFCFA', fontFamily:'var(--font-primary)', fontSize:16, padding:'8px 0', outline:'none'}}/>
      }
    </label>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
