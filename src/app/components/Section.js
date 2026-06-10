export default function Section({ id, children, accent = false, dark = false }) {
  return (
    <section
      id={id}
      style={{
        background: dark ? 'var(--deep)' : accent ? '#0F0F0F' : 'var(--bg)',
        borderTop: '1px solid var(--mid)',
        padding: '6rem 0',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '780px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        {children}
      </div>
    </section>
  )
}