import Badge from 'react-bootstrap/Badge';
import './pokeProfile.css';
import { BasicInfo } from '../../types/types';
import teraIcons from '../../teraIcons';

function formatItem(item: string) {
  const returnString = item.toLowerCase().replace(/\s/g, '');
  return returnString;
}

function formatName(name: string) {
  const returnString = name.toLowerCase().replace(/\s/g, '-');
  return returnString;
}

export default function PokeProfile({
  name,
  type,
  tera,
  item,
  ability,
  nature,
}: BasicInfo) {
  return (
    <div className="d-flex flex-column align-items-start gap-2 ">
      <h5>{name}</h5>
      <div className="bg-body-secondary rounded-1 p-2 position-relative">
        <img
          className="img-fluid poke-profile__image"
          src={`https://img.pokemondb.net/sprites/scarlet-violet/normal/${formatName(
            name,
          )}.png`}
          alt={name}
        />
        <div className="d-flex gap-1 position-absolute start-0 top-0 p-1">
          {type.map((typeName) => {
            return (
              <Badge className={`type-${typeName.toLowerCase()}`}>
                {typeName}
              </Badge>
            );
          })}
        </div>
        <div className="position-absolute bottom-0 end-0 p-1">
          <img
            className="poke-profile__item"
            src={`https://serebii.net/itemdex/sprites/pgl/${formatItem(
              item,
            )}.png`}
            alt={formatItem(item)}
          />
        </div>
        <div className="position-absolute bottom-0 start-0 p-1">
          <img
            className="poke-profile__tera"
            src={teraIcons[tera.toLowerCase()]}
            alt={tera}
          />
        </div>
      </div>
      <p className="mb-0">
        <span className="fw-medium">Ability:</span> {ability}
      </p>
      <p className="mb-0">
        <span className="fw-medium">Nature:</span> {nature}
      </p>
    </div>
  );
}
