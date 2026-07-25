export default function PageHero({ title, breadcrumb }) {
  return (
    <div className="page-hero">
      <h1>{title}</h1>
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
    </div>
  )
}
