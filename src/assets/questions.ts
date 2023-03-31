
interface Answer {
    text: string,
    isCorrect: boolean
}

export interface Question {
    question: string,
    answers: Answer[]
}

export const fakeQuestions: Question[] = [
    {
        question: 'Condom',
        answers: [
            { text: 'condon, preservativo', isCorrect: true },
            { text: 'Oculista', isCorrect: false },
            { text: 'Distención Muscular', isCorrect: false },
            { text: 'Planta del pie', isCorrect: false }
        ]
    },
    {
        question: 'Oculist',
        answers: [
            { text: 'condon, preservativo', isCorrect: false },
            { text: 'Oculista', isCorrect: true },
            { text: 'Distención Muscular', isCorrect: false },
            { text: 'Planta del pie', isCorrect: false }
        ]
    },
    {
        question: 'Sole of the foot',
        answers: [
            { text: 'condon, preservativo', isCorrect: false },
            { text: 'Oculista', isCorrect: false },
            { text: 'Distención Muscular', isCorrect: false },
            { text: 'Planta del pie', isCorrect: true }
        ]
    },
    {
        question: 'Strain',
        answers: [
            { text: 'condon, preservativo', isCorrect: false },
            { text: 'Oculista', isCorrect: false },
            { text: 'Distención Muscular', isCorrect: true },
            { text: 'Planta del pie', isCorrect: false }
        ]
    }
]
