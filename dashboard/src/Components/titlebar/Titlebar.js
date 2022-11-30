import "./titlebar.scss"

function Titlebar(props){
    return (
        <div className="titlebar">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Titlebar