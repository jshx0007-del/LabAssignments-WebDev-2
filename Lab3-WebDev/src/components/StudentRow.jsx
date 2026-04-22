import { useState, useEffect } from 'react'

function StudentRow({ student, index, onUpdateScore, onDelete }) {

    const [inputValue, setInputValue] = useState(String(student.score))

    useEffect(() => {
        setInputValue(String(student.score))
    }, [student.score])

    const isPassing = student.score >= 40
    const handleUpdate = () => {
        const newScore = parseInt(inputValue, 10)

        if (!isNaN(newScore) && newScore >= 0 && newScore <= 100) {
            onUpdateScore(student.id, newScore)
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleUpdate()
        }
    }

    return (
        <tr>
            <td className="td-rank">{index + 1}</td>

            <td className="td-name">{student.name}</td>

            <td className="td-score">
                <div className="score-group">
                    <input
                        className="score-input"
                        type="number"
                        min="0"
                        max="100"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="btn-update" onClick={handleUpdate}>
                        Update
                    </button>
                </div>
            </td>

            <td className="td-status">
                <span className={`badge ${isPassing ? 'pass' : 'fail'}`}>
                    {isPassing ? '✓ Pass' : '✗ Fail'}
                </span>
            </td>

            <td>
                <button
                    className="btn-delete"
                    onClick={() => onDelete(student.id)}
                    title="Remove student"
                >
                    ✕
                </button>
            </td>
        </tr>
    )
}

export default StudentRow