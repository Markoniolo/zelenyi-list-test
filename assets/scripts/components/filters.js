const filters = document.querySelector("[data-element='filters']")

if (filters) filtersInit()

function filtersInit () {
  const checkboxesRow = document.querySelectorAll("[data-element='filters__select-checkbox_row']")
  const checkboxes = document.querySelectorAll("[data-element='filters__select-checkbox']")
  const capPictures = document.querySelectorAll(".cap__picture")

  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => checkboxesChange(i))
  }

  function checkboxesChange (index) {
    const checkboxRow = Array.from(checkboxesRow).find(item => item.value === checkboxes[index].value)
    if (checkboxRow) {
      const labelRow = checkboxRow.closest('.filters__select-item_row')
      if (checkboxes[index].checked) {
        labelRow.classList.add('active')
        checkboxRow.checked = true
      } else {
        labelRow.classList.remove('active')
        checkboxRow.checked = false
      }
    }
    picturesUpdate(index)
  }

  for (let i = 0; i < checkboxesRow.length; i++) {
    checkboxesRow[i].addEventListener('change', () => checkboxesRowChange(i))
  }

  function checkboxesRowChange (index) {
    const itemRow = checkboxesRow[index].closest('.filters__select-item_row')
    if (itemRow) {
      itemRow.classList.remove('active')
      const checkbox = Array.from(checkboxes).find(item => item.value === checkboxesRow[index].value)
      if (checkbox) {
        checkbox.checked = false
        checkboxesRow[index].checked = false
      }
    }
    picturesUpdate(index)
  }

  function resetCheckboxes () {
    for (let i = 1; i < Array.from(checkboxes).length; i++) {
      Array.from(checkboxes)[i].checked = false
      Array.from(checkboxesRow)[i].checked = false
      const itemRow = Array.from(checkboxesRow)[i].closest('.filters__select-item_row')
      itemRow.classList.remove('active')
    }
  }

  function resetFirstCheckboxes () {
    Array.from(checkboxes)[0].checked = false
    Array.from(checkboxesRow)[0].checked = false
    const itemRow = Array.from(checkboxesRow)[0].closest('.filters__select-item_row')
    itemRow.classList.remove('active')
  }

  function picturesUpdate (index) {
    if (index === 0 && !checkboxes[index].checked) {
      resetPictures()
    } else if (index === 0 && checkboxes[index].checked) {
      activatePictures()
      resetCheckboxes()
    } else if (index !== 0) {
      resetFirstCheckboxes()
      let isAllPicturesActive = true
      for (let i = 0; i < capPictures.length; i++) {
        if (!capPictures[i].classList.contains('active')) isAllPicturesActive = false
      }
      if (isAllPicturesActive) resetPictures()
      if (!checkboxes[index].checked) {
        capPictures[index-1].classList.remove('active')
      } else {
        capPictures[index-1].classList.add('active')
      }
    }
  }

  function resetPictures () {
    for (let i = 0; i < capPictures.length; i++) {
      capPictures[i].classList.remove('active')
    }
  }

  function activatePictures () {
    for (let i = 0; i < capPictures.length; i++) {
      capPictures[i].classList.add('active')
    }
  }
}
