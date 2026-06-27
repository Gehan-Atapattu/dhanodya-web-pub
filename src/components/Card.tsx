interface CardProps {
  img: string;
  title: string;
  text: string;
}

function Card({ img, title, text }: CardProps): React.JSX.Element {
  return (
    <div className="card">
      <br />

      <div className="text-center">
        <img alt="card-img" src={img} className="text-center img-fluid" />
      </div>

      <div className="text-center">
        <h3 className="card-title">{title}</h3>
      </div>

      <div className="p-3">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;