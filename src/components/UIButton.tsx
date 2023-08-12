

interface UIProps {
    callback: (value: string) => void;
}

export const UIButton = ({callback}: UIProps) => {

    function handleDelete() {
        return callback('Delete');
    }

    function handleDone() {
        return callback('Done');
    }

    return (
        <div>
            <button className="btn-done" onClick={e => {e.stopPropagation(); handleDone();}}></button>
            <button className="btn-delete" onClick={e => {e.stopPropagation(); handleDelete();}}></button>
        </div>)
}