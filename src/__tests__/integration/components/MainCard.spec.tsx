import {render, screen, fireEvent, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import MainCard from '../../../components/MainCard'

describe('MainCard Tests', () => { 

    test('Loads and display question grid', async () => { 

        render(<MainCard />);

        // await screen.findAllByText('Quiz App');

        expect(screen.getByText('Quiz App')).toBeInTheDocument();
        // const buttons = container.getElementsByClassName('MuiButton-outlined');
        const buttons = screen.getAllByTestId('answerButton');
        const counterSpan = screen.getByText(/question/i);
        const [nextButton] = screen.getAllByText(/UP NEXT/i);
        
        expect(buttons.length).toBe(4);
        expect(nextButton).toBeInTheDocument();
        expect(counterSpan.textContent).toBe('question 1 of 20');
        expect(nextButton.hasAttribute('disabled')).toBe(true);
        
        const firstButton = buttons[0];
        
        fireEvent.click(firstButton); 
        expect(nextButton.hasAttribute('disabled')).toBe(false);
        fireEvent.click(nextButton);
        expect(nextButton.hasAttribute('disabled')).toBe(true);
        expect(counterSpan.textContent).toBe('question 2 of 20');
        
        for (let index = 0; index < 19; index++) {
            
            const [button] = screen.getAllByTestId('answerButton');
            fireEvent.click(button);

            if(index === 18) {
                break;
            }

            fireEvent.click(nextButton);
        }

        const finishButton = screen.getByText(/FINISH QUIZ/i);
        expect(counterSpan.textContent).toBe('question 20 of 20');
        expect(finishButton).toBeInTheDocument();
        
        
        if(finishButton) {
            fireEvent.click(finishButton);
        }
        expect(screen.getByTestId('answerButton')).toBeFalsy();
        // expect(buttons).not.toBeInTheDocument();
        // fireEvent.click(nextButton);




        



    })

 })