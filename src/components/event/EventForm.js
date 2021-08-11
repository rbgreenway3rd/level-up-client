import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createEvent, EventContext } from "./EventProvider.js";
import { GameContext } from "../game/GameProvider.js";

export const EventForm = () => {
  const history = useHistory();
  const { createEvent } = useContext(EventContext);
  const { getGames, games } = useContext(GameContext);
  const [currentEvent, setCurrentEvent] = useState({
    // host: 0,
    // game: 0,
    // title: "",
    // description: "",
    // date: "",
    // time: "",
  });

  useEffect(() => {
    getGames();
  }, []);

  // this function replaces all changeEvent functions with a single, universal function for state
  // see bottom of module for old functions

  const changeEventState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState[event.target.name] = event.target.value;
    setCurrentEvent(newEventState);
  };

  // New Event Registration Form
  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={changeEventState}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option value={game.id}>{game.name}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control"
            value={currentEvent.title}
            onChange={changeEventState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentEvent.description}
            onChange={changeEventState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentEvent.date}
            onChange={changeEventState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            type="time"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentEvent.time}
            onChange={changeEventState}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          // Create the event

          // Once event is created, redirect user to event list
        }}
        className="btn btn-primary"
      >
        Create Event
      </button>
    </form>
  );
};

// const changeEventHostState = (event) => {
//   const newEventState = { ...currentEvent };
//   newEventState.host = event.target.value;
//   setCurrentEvent(newEventState);
// };

// const changeEventGameState = (event) => {
//   const newEventState = { ...currentEvent };
//   newEventState.gameId = event.target.value;
//   setCurrentEvent(newEventState);
// };

// const changeEventTitleState = (event) => {
//   const newEventState = { ...currentEvent };
//   newEventState.name = event.target.value;
//   setCurrentEvent(newEventState);
// };

// const changeEventDescriptionState = (event) => {
//   const newEventState = { ...currentEvent };
//   newEventState.description = event.target.value;
//   setCurrentEvent(newEventState);
// };

// const changeEventDateState = (event) => {
//   const newEventState = { ...currentEvent };
//   newEventState.date = event.target.value;
//   setCurrentEvent(newEventState);
// };

// const changeEventTimeState = (event) => {
//   const newEventState = { ...currentEvent };
//   newEventState.time = event.target.value;
//   setCurrentEvent(newEventState);
// };
