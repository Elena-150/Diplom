const PopularTrackItem = (props: { title: string, artist: string, tags: string[], image_url: string | undefined}) => {
  return (

    <div className="main-view__recently-played-item">
        <img className="recently-played__item-img" src={props.image_url} alt="img" />
        <div className="recently-played-item__not-image-part playlist-item-primary-text">
            <span>{props.title}</span>
            <div className="author_text"><span>{props.artist}</span></div>
            {props.tags?.length > 0 && (
                <div className="title-container__tags">
                    {props.tags.map((tag, id) => (
                        <p key={id} className="title-container__tag">{tag}</p>
                    ))}
                </div>
            )}
        </div>
    </div>
  );
};

export default PopularTrackItem;