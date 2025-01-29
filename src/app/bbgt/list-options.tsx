'use client'

export function ListOptions() {
  return (
    <>
      <div
        onClick={() => {
          const el = document.getElementById('bbgt-layout')
          if (!el) {
            return
          }
          // el.style.gridTemplateColumns = '1fr'

          const wrapper = document.getElementById('bbgt-layout-wrapper')
          if (!wrapper) {
            return
          }
          wrapper.className = 'one-col'
        }}
      >
        One
      </div>
      <div
        onClick={() => {
          const el = document.getElementById('bbgt-layout')
          if (!el) {
            return
          }
          // el.style.gridTemplateColumns = 'repeat(auto-fill, minmax(100px, 1fr))'

          const wrapper = document.getElementById('bbgt-layout-wrapper')
          if (!wrapper) {
            return
          }
          wrapper.className = 'less-cols'
        }}
      >
        Small
      </div>
      <div
        onClick={() => {
          const el = document.getElementById('bbgt-layout')
          if (!el) {
            return
          }
          // el.style.gridTemplateColumns = 'repeat(auto-fill, minmax(50px, 1fr))'

          const wrapper = document.getElementById('bbgt-layout-wrapper')
          if (!wrapper) {
            return
          }
          wrapper.className = 'more-cols'
        }}
      >
        Big
      </div>
    </>
  )
}
