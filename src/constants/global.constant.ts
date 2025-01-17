export const semesterNameConstants = [
  {
    label: 'Autumn',
    value: '01'
  },
  {
    label: 'Summer',
    value: '02'
  },
  {
    label: 'Fall',
    value: '03'
  }
]

const currentYear = new Date().getFullYear()
export const semesterStartYear = [0, 1, 2, 3, 4, 5].map(year => ({
  label: String(currentYear + year),
  value: String(currentYear + year)
}))

export const monthConstant = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const semesterStartAndEndMonths = monthConstant.map(month => ({
  label: month,
  value: month
}))
