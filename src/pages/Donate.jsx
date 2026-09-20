import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Donate() {
  const [amount, setAmount] = useState(27);
  const [name, setName] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('dgc_donations');
    if (saved) {
      setDonations(JSON.parse(saved));
    }
  }, []);

  const amounts = [10, 27, 50, 100];

  const handleDonate = async (e) => {
    e.preventDefault();
    setError('');
    
    let donorName = name.trim();
    
    if (donorName) {
      if (donorName.length > 30) {
        setError('Name cannot exceed 30 characters.');
        return;
      }
      if (!/^[a-zA-Z\s]+$/.test(donorName)) {
        setError('Name must contain only basic letters and spaces (no ASCII art or special characters).');
        return;
      }
    } else {
      donorName = 'Anonymous Citizen';
    }

    const donationAmount = Number(amount);
    
    if (isNaN(donationAmount) || donationAmount < 1) {
      setError('Please enter a valid donation amount.');
      return;
    }
    if (donationAmount > 3300) {
      setError('To maintain our grassroots movement, we cap individual donations at ₳3,300.');
      return;
    }

    const dateStr = new Date().toLocaleDateString();

    const newDonation = {
      name: donorName,
      amount: donationAmount,
      date: dateStr
    };

    const webhookUrl = "https://discord.com/api/webhooks/1542455302228807691/J6-OJXHa6LYnd5lIPF898xb3yCwjy3zcW3z2aT9psL6MfE0tBsuPyXWyye3iQYuyucc8";
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🌱✊ **New Green Labor Campaign Donation!**\n**Name:** ${donorName}\n**Amount:** ₳${donationAmount}\n**Date:** ${dateStr}`
          })
        });
      } catch (err) {
        console.error("Failed to send Discord webhook", err);
      }
    }
    
    const updatedDonations = [newDonation, ...donations];
    setDonations(updatedDonations);
    localStorage.setItem('dgc_donations', JSON.stringify(updatedDonations));
    
    setSubmitted(true);
    setName('');
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div>
        <header className="page-header">
          <div className="container">
            <h1 className="text-gradient-gl">Thank You!</h1>
          </div>
        </header>
        <section className="section section-light">
          <div className="container text-center" style={{ maxWidth: '600px', padding: '6rem 0' }}>
            <h2 style={{ marginBottom: '2rem' }} className="text-gradient-gl">Donation Processed</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '3rem' }}>
              Your contribution of ₳{amount} fuels our grassroots movement across Caprica. Together, we are unstoppable.
            </p>
            <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Make Another Donation</button>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/" style={{ color: 'var(--color-text)', textDecoration: 'underline', fontWeight: 'bold' }}>Return Home</Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="text-gradient-gl">Donate</h1>
        </div>
      </header>
      
      {/* Light section, Dark Card (Alternating Contrast Rule) */}
      <section className="section section-light">
        <div className="container">
          <div className="card card-dark text-center" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{ color: 'var(--color-pure-white)', marginBottom: '1rem', fontSize: '3rem' }}>Fund the Revolution</h2>
            <p style={{ color: 'var(--color-pure-white)', marginBottom: '3rem', fontSize: '1.2rem', fontWeight: '500' }}>
              We refuse corporate PAC money. Our campaign relies entirely on grassroots funding from everyday citizens.
            </p>
            
            <form onSubmit={handleDonate}>
              {error && (
                <div style={{ backgroundColor: 'var(--color-red)', color: 'var(--color-pure-white)', padding: '1rem', marginBottom: '2rem', fontWeight: 'bold', borderLeft: '4px solid #000' }}>
                  {error}
                </div>
              )}
              
              <div style={{ marginBottom: '2rem' }}>
                <input 
                  type="text" 
                  placeholder="Your Name (Optional)" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength="30"
                  style={{ width: '100%', padding: '1rem', fontSize: '1.25rem', border: '2px solid transparent', outline: 'none', backgroundColor: 'var(--color-pure-white)', color: 'var(--color-text)' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {amounts.map(amt => (
                  <button 
                    key={amt}
                    type="button"
                    onClick={() => { setAmount(amt); setIsCustom(false); }}
                    className="btn" 
                    style={{ 
                      backgroundColor: amount == amt && !isCustom ? 'var(--color-pure-white)' : 'var(--color-pure-white)', 
                      color: amount == amt && !isCustom ? 'var(--color-text)' : 'var(--color-text-muted)',
                      border: '2px solid transparent',
                      fontSize: '1.25rem'
                    }}
                  >
                    ₳{amt}
                  </button>
                ))}
              </div>

              <div style={{ marginBottom: '3rem' }}>
                {isCustom ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--color-pure-white)', padding: '0.5rem 1rem', border: '2px solid var(--color-pure-white)' }}>
                    <span style={{ fontSize: '1.5rem', color: 'var(--color-text)', fontWeight: '800' }}>₳</span>
                    <input 
                      type="number" 
                      min="1"
                      max="3300"
                      value={amount} 
                      onChange={(e) => setAmount(e.target.value)}
                      style={{ border: 'none', background: 'transparent', fontSize: '1.5rem', width: '100%', outline: 'none', color: 'var(--color-text)', fontWeight: '800' }}
                      autoFocus
                    />
                  </div>
                ) : (
                  <button 
                    type="button"
                    onClick={() => { setIsCustom(true); setAmount(''); }}
                    className="btn" 
                    style={{ width: '100%', backgroundColor: 'transparent', color: 'var(--color-pure-white)', border: '2px solid var(--color-pure-white)', fontSize: '1.25rem' }}
                  >
                    Custom Amount
                  </button>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.5rem', padding: '1.5rem' }} disabled={!amount || amount <= 0}>
                Donate ₳{amount || 0}
              </button>
            </form>
          </div>

          {/* Recent Donations Feed */}
          {donations.length > 0 && (
            <div style={{ marginTop: '8rem' }}>
              <div className="text-center" style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '3rem' }}>Grassroots Support</h2>
                <p style={{ fontSize: '1.25rem' }}>See who is powering the Green Labor campaign.</p>
              </div>
              <div className="grid grid-3">
                {donations.slice(0, 9).map((d, i) => (
                  <div key={i} className="card card-dark text-center" style={{ padding: '2rem' }}>
                    <h3 style={{ color: 'var(--color-pure-white)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>₳{d.amount}</h3>
                    <p style={{ color: 'var(--color-pure-white)', fontWeight: '800', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1.1rem' }}>{d.name}</p>
                    <p style={{ color: 'var(--color-pure-white)', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: '500' }}>{d.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
