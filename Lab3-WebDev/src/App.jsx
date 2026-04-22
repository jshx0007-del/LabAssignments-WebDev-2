import { useState, useRef } from 'react'

import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

import './App.css'

const initialStudents = [
  { id: 1, name: 'Janvi', score: 77 },
  { id: 2, name: 'Anshika', score: 83 },
  { id: 3, name: 'Arth', score: 67 },
  { id: 4, name: 'Krishna', score: 70 },
  { id: 5, name: 'Idiot', score: 28 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)
  const nextId = useRef(initialStudents.length + 1)

  const handleUpdateScore = (id, newScore) => {
    const updatedList = students.map((student) => {
      if (student.id === id) {
        return { ...student, score: newScore }
      }
      return student
    })
    setStudents(updatedList)
  }

  const handleAddStudent = (name, score) => {
    const newStudent = {
      id: nextId.current,
      name: name,
      score: score,
    }
    nextId.current = nextId.current + 1
    setStudents([...students, newStudent])
  }

  const handleDelete = (id) => {
    const filteredList = students.filter((student) => student.id !== id)
    setStudents(filteredList)
  }

  const totalStudents = students.length
  const passingCount = students.filter((s) => s.score >= 40).length
  const failingCount = totalStudents - passingCount

  let classAverage
  if (totalStudents > 0) {
    classAverage = Math.round(students.reduce((sum, s) => sum + s.score, 0) / totalStudents)
  } else {
    classAverage = 0
  }

  return (
    <>
      <Header />

      <main className="main">
        <div className="stats-bar">
          <div className="stat-card total">
            <span className="stat-label">Total Students</span>
            <span className="stat-value">{totalStudents}</span>
          </div>
          <div className="stat-card pass">
            <span className="stat-label">Passed</span>
            <span className="stat-value">{passingCount}</span>
          </div>
          <div className="stat-card fail">
            <span className="stat-label">Failed</span>
            <span className="stat-value">{failingCount}</span>
          </div>
          <div className="stat-card total">
            <span className="stat-label">Class Average</span>
            <span className="stat-value">{classAverage}</span>
          </div>
        </div>

        <StudentTable
          students={students}
          onUpdateScore={handleUpdateScore}
          onDelete={handleDelete}
        />

        <AddStudentForm onAdd={handleAddStudent} />

      </main>
    </>
  )
}

export default App