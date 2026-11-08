import s from './Breadcrumbs.module.css'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className={s.crumbs}>
      <ol>
        {items.map(([label, href], i) => (
          <li key={label}>{href && i < items.length - 1 ? <a href={href}>{label}</a> : <span aria-current="page">{label}</span>}</li>
        ))}
      </ol>
    </nav>
  )
}
