import './TattooPost.css';

function TattooPost(props) {
    const { tattoo } = props;
    return (
        <div className="tattoo-post">
            <div className="tattoo-bg" />
            <div className="tattoo-content">
                <img src={tattoo.fullUrl} />
                <h3>{tattoo.title}</h3>
            </div>
        </div>
    );
}

export default TattooPost;