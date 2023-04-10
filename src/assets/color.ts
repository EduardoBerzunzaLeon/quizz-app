type ButtonColors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export const getColor = ( isCorrect: boolean, text: string, answerText: string ): ButtonColors => {

    if(text === '') return 'info';

    if(isCorrect) return 'success';

    return (text === answerText) ? 'error' : 'info';

  }

export default  {
    getColor
}