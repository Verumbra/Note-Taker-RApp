
import './scss/NavBar.scss';

interface navProps {
    onClick: () => void;
}

export const NavBar = ({onClick}: navProps) => {

    const handleClick = ()=> {
        onClick();
    }

    return (
        <div className="navbar">
            <span className="nav-title">Note Taker</span>
            <button className="btn-add-note" onClick={handleClick}>Add Note</button>
        </div>)
}