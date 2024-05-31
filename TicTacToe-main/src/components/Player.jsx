import { useState } from "react"



export default function Player({initialName, Symbol, isActive, onChangeName}){
    const[playerName,setPlayerName]= useState(initialName);
    const [isEditing, setIsEditing] = useState(false);


    function changeButtonName(){
        setIsEditing(editing=> !editing);
        if(isEditing){
            onChangeName(Symbol, playerName);
        }
    }
    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editableplayerName = <span className="player-name">{playerName}</span>;
    if(isEditing){
        editableplayerName = <input type="text" maxLength={10} required value={playerName} onChange={handleChange} />;
    }
    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editableplayerName}
              <span className="player-symbol">{Symbol}</span>
              <button onClick={changeButtonName}>{isEditing?"Save":"Edit"}</button>
            </span>
        </li>
    )
}