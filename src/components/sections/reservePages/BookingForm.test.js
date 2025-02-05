import { render, screen, fireEvent, getByText, getByLabelText } from "@testing-library/react";
import ReservationForm from "./BookingForm"; // Assuming the component is in the same directory
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom"; // Wrap with Router for `Link` to work

// Mock props to simulate `availableTimes` and `updateTimes`
const mockUpdateTimes = jest.fn();
const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

describe("ReservationForm", () => {
  test("renders the reservation form elements correctly", () => {
    render(
        <Router>
        <ReservationForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
        </Router>
    );
      // Check if all required fields are rendered
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Number of People/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /Book Table/i })).toBeDisabled();
  });

  test("enables submit button when all fields are filled", () => {
    render(
      <Router>
        <ReservationForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
      </Router>
    );

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "(123)-456-7890" } });
    fireEvent.change(screen.getByLabelText(/Number of People/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-02-15" } });

    // Ensure submit button is enabled
    expect(screen.getByRole("button", { name: /Book Table/i })).toBeEnabled();
  });

  test("prevents form submission if any required field is missing", () => {
    render(
      <Router>
        <ReservationForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
      </Router>
    );

    // Fill in some fields but not all
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });

    // Ensure submit button is still disabled
    expect(screen.getByRole("button", { name: /Book Table/i })).toBeDisabled();
  });

  test("calls `updateTimes` when date is changed", () => {
    render(
      <Router>
        <ReservationForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
      </Router>
    );

    // Change the date
    fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-02-15" } });

    // Ensure the `updateTimes` function was called with the correct date
    expect(mockUpdateTimes).toHaveBeenCalledWith(new Date("2025-02-15"));
  });

  test("submits the form and redirects when valid data is filled", () => {
    render(
      <Router>
        <ReservationForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
      </Router>
    );

    // Fill in all the required fields
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "(123)-456-7890" } });
    fireEvent.change(screen.getByLabelText(/Number of People/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-02-15" } });

    // Simulate click on submit button
    fireEvent.click(screen.getByRole("button", { name: /Book Table/i }));

    // Check if navigation is successful
    expect(window.location.pathname).toBe("/confirmation");
  });

  test("does not submit if button is clicked while form is incomplete", () => {
     render(
    <Router>
      <ReservationForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />
    </Router>
    );

    // Find the button element
    const button = screen.getByRole("button", { name: /Book Table/i });
    // Simulate filling the form incompletely
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "" } });
    // Ensure button is disabled due to missing data
    expect(button).toBeDisabled();
    // Click the button
    fireEvent.click(button);

    // Check that the page doesn't navigate
    //expect(window.location.pathname).not.toBe("/confirmation");
    expect(screen.getByText("*Please fill mandatory details to book a table")).toBeInTheDocument();
  });
});
