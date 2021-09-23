const Book = (props) => {
    const {image, name, author } = props
    return (
        <div className="book">
            <div className="thumbnail">
                <img src={image}/>
            </div>
            <div className="name">
                {name} - {author}
            </div>
        </div>
    );
}

export default Book;