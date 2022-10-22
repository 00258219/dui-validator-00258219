import { describe } from 'vitest'
import { render, screen } from '@testing-library/react';
import App from './App';

//no se si existe un afterAll pero ahi pondria el render App

describe('App', () => { 
  it('should render', () => {
    render(
      <App/>,
    );

    expect(screen).toBeTruthy;
  });  
  
  it('should have title "Mi DUI es valido?"', () => {
    render(
      <App/>,
    );

    expect(screen.getByText(/Mi DUI es valido?/i)).toBeInTheDocument();
  });

  it('should have an input text', () => {
    const { getByTestId } = render(
      <App/>,
    );

    expect(getByTestId('dui-dui')).toBeInTheDocument();
  });

  it('should have a button with text "Validar"', () => {
    render(
      <App/>,
    );

    expect(screen.getByText(/Validar/i)).toBeInTheDocument();
  });
})
