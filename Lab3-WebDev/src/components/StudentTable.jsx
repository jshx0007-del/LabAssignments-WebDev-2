import StudentRow from './StudentRow'

function StudentTable({ students, onUpdateScore, onDelete }) {

    if (students.length === 0) {
        return (
            <div className="table-container">
                <p className="empty-state">No students yet — add one below ↓</p>
            </div>
        )
    }

    return (
        <div className="table-container">
            <table>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Student Name</th>
                        <th>Score / 100</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student, index) => (
                        <StudentRow
                            key={student.id}
                            student={student}
                            index={index}
                            onUpdateScore={onUpdateScore}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default StudentTable