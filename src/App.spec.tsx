import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import App from "./App"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", async () => {
    render(<App />)

    await act(async () => {}); // Flush microtasks.

    expect(true).toBeTruthy()
})
