import { 
    generateQuestions, 
    getRandomInt, 
    getCorrectAnswer, 
    glossary 
} from "../../../assets";

describe.only('Glossary Test', () => {

    it('Should return a number less or equal than the maximun',() => {
        const max =  10;
        const randomNumber = getRandomInt(max);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });

    it('Should return a number other than notEqual', () => {
        const max = 10;
        const notEqualNumbers = [9, 7, 6, 5, 4, 3, 2];
        const randomNumber = getRandomInt(max, notEqualNumbers);
        expect(notEqualNumbers).not.toContain(randomNumber);
    });

    it('Should return 20 questions', () => {
        const optionsQuantity = 240;
        const totalQuestions = 20;
        const questions = generateQuestions(glossary, optionsQuantity, totalQuestions, []);
        expect(questions.length).toEqual(totalQuestions);
    });
    
    it('Should return a correct question format', () => {
        const questions = generateQuestions(glossary, 240, 20, []);
        const [ firstQuestion ] = questions;

        expect(firstQuestion.answers.length).toEqual(4);

        const correctAnswers = firstQuestion.answers.filter(({ isCorrect }) => isCorrect);

        expect(correctAnswers.length).toEqual(1);

        const positions = questions.reduce((acc, curr) => {
            const position = curr.answers.findIndex(({ isCorrect }) => isCorrect);
            acc.push(position);
            return acc;
        }, [] as number[]);

        const uniquePositions = new Set(positions);
        expect(uniquePositions.size).toBe(4);
    });

    it('Should return the correct answer text', () => {
        const text = 'isCorrect';
        const answers = [
            { text, isCorrect: true },
            { text: 'tuchi', isCorrect: false },
            { text: 'duchi', isCorrect: false },
            { text: 'buchi', isCorrect: false }
        ];

        const correctText = getCorrectAnswer(answers);

        expect(correctText).toBe(text);
    });
    
    it('Should return an empty string', () => {
        const answers = [
            { text: 'cuchi', isCorrect: false },
            { text: 'tuchi', isCorrect: false },
            { text: 'duchi', isCorrect: false },
            { text: 'buchi', isCorrect: false }
        ];

        const correctText = getCorrectAnswer(answers);

        expect(correctText).toBe('');
    });

})