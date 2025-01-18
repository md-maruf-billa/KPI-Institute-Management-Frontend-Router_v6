import { TAcademicDepartment } from "../Types"

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


export const academicDepartmentsContant:TAcademicDepartment[]=[
  {
    "name": "Science",
    "subjects": ["Physics", "Chemistry", "Biology", "Mathematics", "ICT"]
  },
  {
    "name": "Business Studies",
    "subjects": ["Accounting", "Finance", "Management", "Marketing", "Business Mathematics"]
  },
  {
    "name": "Humanities (Arts)",
    "subjects": ["History", "Geography", "Economics", "Bangla", "English", "Civics", "Social Work"]
  },
  {
    "name": "Engineering",
    "subjects": ["Civil", "Electrical and Electronics", "Mechanical", "Computer Science", "Textile"]
  },
  {
    "name": "Medical",
    "subjects": ["MBBS", "Dental", "Nursing", "Pharmacy", "Public Health"]
  },
  {
    "name": "Law",
    "subjects": ["LLB (Bachelor of Laws)", "LLM (Master of Laws)"]
  },
  {
    "name": "Agriculture",
    "subjects": ["Agronomy", "Horticulture", "Soil Science", "Agricultural Economics"]
  },
  {
    "name": "Fine Arts",
    "subjects": ["Drawing and Painting", "Sculpture", "Graphic Design", "Crafts"]
  },
  {
    "name": "Islamic Studies",
    "subjects": ["Islamic History", "Quranic Studies", "Hadith Studies", "Islamic Theology"]
  },
  {
    "name": "Marine and Fisheries",
    "subjects": ["Marine Biology", "Fisheries Science", "Oceanography"]
  },
  {
    "name": "Architecture",
    "subjects": ["B.Arch (Bachelor of Architecture)", "M.Arch (Master of Architecture)"]
  },
  {
    "name": "Environmental Science",
    "subjects": ["Climate Change", "Environmental Management", "Sustainable Development"]
  },
  {
    "name": "Tourism and Hospitality",
    "subjects": ["Hospitality Management", "Tourism Studies", "Event Management"]
  },
  {
    "name": "Journalism and Media",
    "subjects": ["Mass Communication", "Media Studies", "Public Relations"]
  },
  {
    "name": "Computer Science and IT",
    "subjects": ["Software Engineering", "Data Science", "Cybersecurity", "AI and Robotics"]
  }
]
