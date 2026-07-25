export default function PageHero({ title, breadcrumb, subtitle, img }) {
  const style = img
    ? { backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <div className={`page-hero${img ? ' page-hero-img' : ''}`} style={style}>
      {img && <div className="page-hero-overlay" />}
      <div className="page-hero-content">
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        {breadcrumb && (
          <p className="breadcrumb">
            {breadcrumb.split('/').map((part, i, arr) => (
              <span key={i}>
                {i < arr.length - 1 ? (
                  <>{part.trim()} <span style={{ color: 'rgba(255,255,255,0.5)' }}>/</span> </>
                ) : (
                  <span style={{ color: '#fff' }}>{part.trim()}</span>
                )}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}
