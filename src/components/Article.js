import React from 'react';
import pinIcon from '../icons/pin.png';

export default function Article(data) {
  return (
    <article className="article flex">
      <section className="article_cover">
        <img src={`../images${data.imageUrl}`} alt={`${data.title}`} />
      </section>
      <section className="article_content flex">
        <div className="article_location flex">
          <img className="location-icon" src={pinIcon} alt="" />
          <p className="location-name">{data.location}</p>
          <a href={data.googleMapsUrl} className="location-link">
            View on Google Map
          </a>
        </div>
        <h2 className="article_title">{data.title}</h2>
        <p className="article_date">
          <span className="article_date--start">{data.startDate}</span>
          {data.endDate && (
            <span className="article_date--end">{data.endDate}</span>
          )}
        </p>
        <p className="article_caption">{data.description}</p>
      </section>
    </article>
  );
}
