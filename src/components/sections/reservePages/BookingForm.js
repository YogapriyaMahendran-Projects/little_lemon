import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const validData = fName.length > 0 && lName.length >0 && email.length>0 && tel.length > 0 && Number(people) > 1 && date ? true : false;

  return (
    <form className="reservation-form">
      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="fName">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => {
            setFName(e.target.value);
          }}
        ></input>
      </section>

      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="lName">Last Name</label> <br></br>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) =>
            {setLName(e.target.value);
            }}
        ></input>
      </section>

      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => {setEmail(e.target.value);
          }}
        ></input>
      </section>

      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => {
          setTel(e.target.value);
          }}
        ></input>
      </section>

      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={2}
          max={100}
          onChange={(e) => {
            setPeople(e.target.value);
          }
          }
        ></input>
      </section>

      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </section>

      <section>
        <label style={{color:"red"}}>*</label>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </section>

      <section>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </section>

      <section>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </section>

      <section>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </section>

      <section>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link to={validData ? "/confirmation":"#"} onClick={(e) => !validData && e.preventDefault()}>
        <button className="action-button" disabled={!validData}>Book Table</button>
        <h5 className="validation-text">{validData ? '' : '*Please fill mandatory details to book a table'}</h5>
        </Link>
      </section>
    </form>
  );
}
