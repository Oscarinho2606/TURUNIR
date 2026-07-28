export default function PageHero({ title, breadcrumb, subtitle, img }) {
  const style = img
    ? { backgroundImage: `url(${img})` }
    : {}

  return (
    <div className={`page-hero${img ? ' page-hero-img' : ''}`} style={style}>
      {img && <div className="page-hero-overlay" />}
      <div className="page-hero-content">
        {breadcrumb && <p className="page-hero-breadcrumb">{breadcrumb}</p>}
        <h1>{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}
