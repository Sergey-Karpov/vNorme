// Функция для сброса смещения тела страницы
export const resetBodyOffset = () => {
  const body = document.body
  const fixedElements = document.querySelectorAll('.fixed')

  // Сброс смещения и скроллинга тела страницы
  body.style.paddingRight = ''
  fixedElements.forEach((el) => (el.style.paddingRight = ''))
  body.style.overflow = 'auto'
}

// Функция для переключения смещения тела страницы
export const toggleBodyOffset = () => {
  const body = document.body
  const fixedElements = document.querySelectorAll('.fixed')
  const scrollWidth = window.innerWidth - body.offsetWidth

  // Если смещение уже установлено, сбрасываем его
  if (body.style.paddingRight) {
    body.style.paddingRight = ''
    fixedElements.forEach((el) => (el.style.paddingRight = ''))
    body.style.overflow = 'auto'
  } else {
    // Иначе устанавливаем смещение и блокируем скроллинг тела страницы
    body.style.paddingRight = `${scrollWidth}px`
    fixedElements.forEach((el) => (el.style.paddingRight = `${scrollWidth}px`))
    body.style.overflow = 'hidden'
  }
}

export const formatPsychologists = (count) => {
  const roundCount = Math.round(count)
  const lastDigit = roundCount % 10
  const lastTwoDigits = roundCount % 100

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} психологов`
  } else if (lastDigit === 1) {
    return `${count} психолог`
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${count} психолога`
  } else {
    return `${count} психологов`
  }
}
