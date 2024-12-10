const filtersSelect = document.querySelector("[data-element='filters__select-value']")

if (filtersSelect) filtersSelectInit()

function filtersSelectInit () {
  filtersSelect.addEventListener('click', toggleSelect)

  function toggleSelect () {
    filtersSelect.classList.toggle('active')
  }

  window.addEventListener('click', closeSelect)

  function closeSelect (e) {
    if (e.target.classList.contains('filters__select-value') || e.target.closest('.filters__select')) return
    filtersSelect.classList.remove('active')
  }
}
