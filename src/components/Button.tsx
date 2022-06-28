import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  genre: {
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }
  selected: boolean;
  onClickButton: (id: number)=>void
}

export function Button({ genre, selected, onClickButton, ...rest }: ButtonProps) {
  return (
    <button type="button" {...(selected && { className: 'selected' })} onClick={()=>onClickButton(genre.id)} {...rest}>
      <Icon name={genre.name} color={selected ? '#FAE800' : '#FBFBFB'} />
      {genre.title}
    </button>
  );
}