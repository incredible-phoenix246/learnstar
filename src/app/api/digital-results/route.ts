import { NextResponse } from "next/server"

const students = [
    {
        id: "STU001",
        name: "John Doe",
        class: "JSS 2",
        term: "First Term",
        session: "2023/2024",
        overallGrade: "A",
        position: "1st out of 45",
        attendance: {
            present: 58,
            total: 60,
        },
        subjects: [
            {
                name: "Mathematics",
                score: 92,
                grade: "A",
                teacherComment: "Excellent problem-solving skills. Shows great understanding of complex concepts.",
            },
            {
                name: "English",
                score: 88,
                grade: "B+",
                teacherComment: "Good communication skills. Need to work on advanced vocabulary.",
            },
            {
                name: "Science",
                score: 95,
                grade: "A+",
                teacherComment: "Outstanding performance in experiments and theoretical concepts.",
            },
            {
                name: "Social Studies",
                score: 85,
                grade: "B",
                teacherComment: "Good understanding of concepts. Could participate more in discussions.",
            },
            {
                name: "Computer Science",
                score: 98,
                grade: "A+",
                teacherComment: "Exceptional programming skills and logical thinking.",
            },
        ],
        classTeacherComment:
            "John is an exceptional student who consistently demonstrates strong academic performance and leadership qualities. He actively participates in class activities and helps his peers.",
        principalComment:
            "An outstanding performance this term. Keep up the excellent work and continue to maintain this high standard.",
        nextTerm: "January 8th, 2024",
        recommendations: [
            "Focus on advanced mathematics topics through online resources like Khan Academy",
            "Join the school's debate club to enhance English vocabulary and public speaking",
            "Consider participating in the upcoming science fair to showcase experimental skills",
            "Explore additional programming courses to further develop computer science expertise",
            "Take on peer tutoring to reinforce understanding and help classmates",
        ],
    },
    {
        id: "STU002",
        name: "Jane Smith",
        class: "SSS 1",
        term: "Second Term",
        session: "2023/2024",
        overallGrade: "B+",
        position: "5th out of 50",
        attendance: {
            present: 55,
            total: 60,
        },
        subjects: [
            {
                name: "Mathematics",
                score: 85,
                grade: "B",
                teacherComment: "Good grasp of concepts but needs more practice with word problems.",
            },
            {
                name: "English",
                score: 90,
                grade: "A-",
                teacherComment: "Excellent writing skills. Continue working on oral presentations.",
            },
            {
                name: "Biology",
                score: 88,
                grade: "B+",
                teacherComment: "Strong understanding of biological processes. Lab work is commendable.",
            },
            {
                name: "Chemistry",
                score: 82,
                grade: "B-",
                teacherComment: "Needs more focus on chemical equations and balancing.",
            },
            {
                name: "Physics",
                score: 87,
                grade: "B+",
                teacherComment: "Good theoretical knowledge. Could improve practical applications.",
            },
        ],
        classTeacherComment:
            "Jane shows great potential and has maintained consistent performance throughout the term. She is particularly strong in English and Biology.",
        principalComment:
            "Good performance overall. With more focused effort in specific areas, Jane can achieve even better results next term.",
        nextTerm: "January 8th, 2024",
        recommendations: [
            "Utilize math practice apps for daily problem-solving exercises",
            "Join the school's science club to enhance practical laboratory skills",
            "Practice chemical equations using online simulation tools",
            "Consider forming a study group for physics problem-solving sessions",
            "Read more scientific articles to improve subject-specific vocabulary",
        ],
    },
    {
        id: "STU003",
        name: "David Johnson",
        class: "JSS 3",
        term: "Third Term",
        session: "2023/2024",
        overallGrade: "A-",
        position: "3rd out of 48",
        attendance: {
            present: 57,
            total: 60,
        },
        subjects: [
            {
                name: "Mathematics",
                score: 89,
                grade: "B+",
                teacherComment: "Strong analytical skills. Shows good work in geometry.",
            },
            {
                name: "English",
                score: 92,
                grade: "A",
                teacherComment: "Excellent comprehension and writing abilities.",
            },
            {
                name: "Science",
                score: 94,
                grade: "A",
                teacherComment: "Outstanding performance in both theory and practical work.",
            },
            {
                name: "Social Studies",
                score: 91,
                grade: "A-",
                teacherComment: "Very good understanding of current affairs and history.",
            },
            {
                name: "Art",
                score: 88,
                grade: "B+",
                teacherComment: "Creative and innovative in project work.",
            },
        ],
        classTeacherComment:
            "David is a well-rounded student who excels in both academics and creative subjects. His positive attitude towards learning is commendable.",
        principalComment: "Excellent progress this term. David shows great promise and leadership potential.",
        nextTerm: "January 8th, 2024",
        recommendations: [
            "Explore advanced geometry topics through interactive online platforms",
            "Consider starting a creative writing blog to further develop writing skills",
            "Participate in science competitions to challenge yourself further",
            "Join art workshops to enhance creative techniques",
            "Take part in student leadership programs to develop organizational skills",
        ],
    },
    {
        id: "STU004",
        name: "Sarah Williams",
        class: "SSS 2",
        term: "First Term",
        session: "2023/2024",
        overallGrade: "A",
        position: "2nd out of 42",
        attendance: {
            present: 59,
            total: 60,
        },
        subjects: [
            {
                name: "Mathematics",
                score: 96,
                grade: "A+",
                teacherComment: "Exceptional performance in calculus and statistics.",
            },
            {
                name: "English",
                score: 94,
                grade: "A",
                teacherComment: "Outstanding literary analysis and essay writing skills.",
            },
            {
                name: "Biology",
                score: 92,
                grade: "A",
                teacherComment: "Excellent understanding of complex biological systems.",
            },
            {
                name: "Chemistry",
                score: 95,
                grade: "A+",
                teacherComment: "Superior lab work and theoretical knowledge.",
            },
            {
                name: "Physics",
                score: 93,
                grade: "A",
                teacherComment: "Excellent grasp of mechanics and electromagnetic concepts.",
            },
        ],
        classTeacherComment:
            "Sarah is an outstanding student who consistently demonstrates excellence across all subjects. Her analytical and practical skills are exemplary.",
        principalComment:
            "A remarkable performance this term. Sarah continues to maintain the highest standards in her academic pursuits.",
        nextTerm: "January 8th, 2024",
        recommendations: [
            "Consider enrolling in online advanced placement courses",
            "Participate in national science olympiads",
            "Join research projects to apply theoretical knowledge",
            "Explore university-level topics in areas of interest",
            "Mentor younger students in STEM subjects",
        ],
    },
    {
        id: "STU005",
        name: "Michael Brown",
        class: "JSS 1",
        term: "Second Term",
        session: "2023/2024",
        overallGrade: "B",
        position: "15th out of 52",
        attendance: {
            present: 54,
            total: 60,
        },
        subjects: [
            {
                name: "Mathematics",
                score: 78,
                grade: "C+",
                teacherComment: "Needs more practice with basic operations and problem-solving.",
            },
            {
                name: "English",
                score: 85,
                grade: "B",
                teacherComment: "Good progress in reading comprehension. Grammar needs attention.",
            },
            {
                name: "Science",
                score: 80,
                grade: "B-",
                teacherComment: "Shows interest in experiments but needs to improve theory.",
            },
            {
                name: "Social Studies",
                score: 88,
                grade: "B+",
                teacherComment: "Good participation in class discussions and projects.",
            },
            {
                name: "Computer Science",
                score: 82,
                grade: "B-",
                teacherComment: "Shows potential but needs more practice with coding concepts.",
            },
        ],
        classTeacherComment:
            "Michael shows promise but needs to develop better study habits. He performs well when interested in the subject matter.",
        principalComment:
            "Fair performance with room for improvement. Consistent study and practice will help achieve better results.",
        nextTerm: "January 8th, 2024",
        recommendations: [
            "Establish a daily mathematics practice routine using educational apps",
            "Use grammar checking tools while writing to improve English skills",
            "Watch educational science videos to better understand theoretical concepts",
            "Practice coding through interactive online platforms",
            "Create a structured study schedule with regular breaks",
        ],
    },
]

export async function POST(req: Request) {
    const { studentId } = await req.json()

    const student = students.find((s) => s.id === studentId)

    if (student) {
        return NextResponse.json({ result: student })
    } else {
        return NextResponse.json(
            {
                error:
                    "Student not found. Please check the ID and try again. Valid IDs: STU001, STU002, STU003, STU004, STU005",
            },
            { status: 404 },
        )
    }
}

