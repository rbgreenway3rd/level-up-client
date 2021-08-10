import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createEvent, EventContext } from "./EventProvider.js";
import { GameContext } from "./GameProvider.js";

export const EventForm = () => {
  const history = useHistory();
  const { createEvent, getEvents } = useContext(EventContext);
  const { getGameTypes, games } = useContext(GameContext);
  const [currentEvent, setCurrentEvent] = useState({
    host: 0,
    game: 0,
    title: "",
    description: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    getEvents();
    getGameTypes();
  }, []);

  const changeEventHostState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.host = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventGameState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.gameId = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventTitleState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.name = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventDescriptionState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.description = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventDateState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.date = event.target.value;
    setCurrentEvent(newEventState);
  };

  const changeEventTimeState = (event) => {
    const newEventState = { ...currentEvent };
    newEventState.time = event.target.value;
    setCurrentEvent(newEventState);
  };

  return (
    <form className="gameForm">
      <h2 className="gameForm__title">Schedule New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="host">Host: </label>
          {/* <select
            name="host"
            className="form-control"
            value={currentEvent.host}
            onChange={changeEventHostState}
          >
            <option value="0">Select a host...</option>
            {gamers.map((gamer) => (
              <option>{gamer.id}</option>
            ))}
          </select> */}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="gameId">Game: </label>
          <select
            name="gameId"
            className="form-control"
            value={currentEvent.gameId}
            onChange={changeEventGameState}
          >
            <option value="0">Select a game...</option>
            {games.map((game) => (
              <option>{game.name}</option>
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
            onChange={changeEventTitleState}
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
            onChange={changeEventDescriptionState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="text"
            name="date"
            required
            autoFocus
            className="form-control"
            value={currentEvent.date}
            onChange={changeEventDateState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="time">Time: </label>
          <input
            type="text"
            name="time"
            required
            autoFocus
            className="form-control"
            value={currentEvent.time}
            onChange={changeEventTimeState}
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
