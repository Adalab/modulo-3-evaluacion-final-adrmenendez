import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  let status;
  if (props.character.status === 'Alive') {
    status = <i className='fas fa-hand-spock detail_data--icon' />;
  } else if (props.character.status === 'unknown') {
    status = <i className='fas fa-question detail_data--icon' />;
  } else {
    status = <i className='fas fa-skull-crossbones detail_data--icon' />;
  }

  const specie =
    props.character.specie === 'Alien' ? (
      <i className='fab fa-reddit-alien detail_data--icon' />
    ) : (
      <i className='fas fa-male detail_data--icon' />
    );

  return (
    <div className='detail_main'>
      <Link to='/' className='detail_back'>
        <p>
          Volver
          <i className='fas fa-times detail_back--icon' />
        </p>
      </Link>
      <div className='detail'>
        <img
          className='detail_img'
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <div className='detail_data'>
          <h1 className='detail_data--name'>{props.character.name}</h1>
          <p>
            <strong>Especie:</strong> {specie}
          </p>
          <p>
            <strong>Planeta:</strong> {props.character.location}
          </p>
          <p>
            <strong>Episodios:</strong> {props.character.episodes}
          </p>
          <p>
            <strong>Estado:</strong> {status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
