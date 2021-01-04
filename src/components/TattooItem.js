import './TattooItem.css';

function TattooItem(props) {
    const { tattoo, onTattooClick } = props;
    return (
        <div className="tattoo-item">
            <img src={tattoo.thumbnailUrl} onClick={() => onTattooClick(tattoo)} />
            <h4>{tattoo.title}</h4>
        </div>
    );
}

export default TattooItem;