import { useState } from 'react'

function AddStudentForm({ onAdd }) {

    const [name, setName] = useState('')
    const [score, setScore] = useState('')

    const handleSubmit = () => {
        const trimmedName = name.trim()
        const parsedScore = parseInt(score, 10)

        if (trimmedName === '') {
            alert('Please enter a student name.')
            return
        }
        if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
            alert('Please enter a valid score between 0 and 100.')
            return
        }

        onAdd(trimmedName, parsedScore)

        setName('')
        setScore('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }


    return (
        <div className="form-card">
            <h2 className="form-title">
                <span>+</span> Add New Student
            </h2>

            <div className="form-row">

                <div className="form-group">
                    <label className="form-label" htmlFor="input-name">Full Name</label>
                    <input
                        id="input-name"
                        className="form-input"
                        type="text"
                        placeholder="e.g. Janvi Sehrawat"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="input-score">Score (0–100)</label>
                    <input
                        id="input-score"
                        className="form-input"
                        type="number"
                        placeholder="e.g. 77"
                        min="0"
                        max="100"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <button className="btn-add" onClick={handleSubmit}>
                    Add Student
                </button>

            </div>
        </div>
    )
}

export default AddStudentForm