import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing((editing) => !editing); //react dynamically assigns a new value to isEditing.

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  let editableplayerName = <span className="player-name">{playerName}</span>;

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
    {
      /*target will be refer to the element that did emit the event*/
    }
  }

  if (isEditing) {
    editableplayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      {/* if isActive is true, then add the active class to the li tag otherwise let it be undefined.*/}
      <span className="player">
        {/*to create an edit button, we are creating one more span outside the span tag. */}
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
