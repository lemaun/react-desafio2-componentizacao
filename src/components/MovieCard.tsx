import { memo } from 'react';
import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  card: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Value: string;
    }>;
    Runtime: string;
  }
}

function MovieCardComponent({card}: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={card.Poster}
        alt={card.Title}
      />

      <div>
        <div className="movie-info">
          <span>{card.Title}</span>
          <div className="meta">
            <div>
              <Star /> {card.Ratings[0].Value}
            </div>

            <div>
              <Clock /> {card.Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const MovieCard = memo(MovieCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.card, nextProps.card)
})