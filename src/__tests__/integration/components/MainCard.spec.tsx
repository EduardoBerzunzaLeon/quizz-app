
import { render, screen, fireEvent } from '@testing-library/react';
import { MainCard } from '../../../components/MainCard';
import * as assets from '../../../assets';


describe('MainCard Tests', () => { 

    test('Loads and display question grid', async () => { 

        const spyGetColor = jest.spyOn(assets, 'getColor');
        render(<MainCard />);

        expect(screen.getByText('Quiz App')).toBeInTheDocument();
        const buttons = screen.getAllByTestId('answerButton');
        const counterSpan = screen.getByText(/question/i);
        const [nextButton] = screen.getAllByText(/UP NEXT/i);
        
        expect(buttons.length).toBe(4);
        expect(nextButton).toBeInTheDocument();
        expect(counterSpan.textContent).toBe('question 1 of 20');
        expect(nextButton.hasAttribute('disabled')).toBe(true);
        
        const [firstButton, secondButton] = buttons;
        
        fireEvent.click(firstButton); 

        const { calls } = spyGetColor.mock;
        const getColorValues = calls.slice(4,8);
        
        expect(getColorValues[0][1]).toEqual(firstButton.textContent);
        expect(nextButton.hasAttribute('disabled')).toBe(false);
        
        fireEvent.click(secondButton); 
        expect(calls.length).toEqual(spyGetColor.mock.calls.length);
        
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
        expect(screen.queryAllByTestId('answerButton').length).toBe(0);

        let gameOverButtons = screen.getAllByRole('button');
        
        expect(gameOverButtons.length).toBe(2);

        const [ , answersButton ] = gameOverButtons;

        fireEvent.click(answersButton);

        const upNextAnswer = screen.getByRole('button');
        expect(screen.getByText(/What is the meaning of/i)).toBeInTheDocument();
        expect(upNextAnswer).toBeInTheDocument();

        for (let index = 0; index < 20; index++) {
            if(index === 19) {
                expect(upNextAnswer.textContent?.toLowerCase()).toBe('home');
            }
            fireEvent.click(upNextAnswer);   
        }


        gameOverButtons = screen.getAllByRole('button');

        expect(gameOverButtons.length).toBe(2);

        const [ playButton ] = gameOverButtons;

        fireEvent.click(playButton);
        expect(screen.getAllByTestId('answerButton').length).toBe(4);
    })

 })