import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PokeProfile from './components/PokeProfile/pokeProfile';
import { BasicInfo } from './types/types';

const testPokemon: BasicInfo = {
  name: 'Heatran',
  type: ['Fire', 'Steel'],
  tera: 'Grass',
  item: 'Leftovers',
  ability: 'Flash Fire',
  nature: 'Bold',
};

function PokemonInfoWindow() {
  return (
    <div className="p-5 bg-light">
      <Tabs transition={false} defaultActiveKey="spread" variant="tabs">
        <Tab
          eventKey="spread"
          title="Spread"
          className="border border-top-0 rounded-bottom p-3 text-black bg-white"
        >
          <PokeProfile
            {...{
              name: testPokemon.name,
              type: testPokemon.type,
              tera: testPokemon.tera,
              item: testPokemon.item,
              ability: testPokemon.ability,
              nature: testPokemon.nature,
            }}
          />
        </Tab>
        <Tab
          eventKey="set"
          title="Set"
          className="border border-top-0 rounded-bottom p-3 text-black bg-white"
        >
          <PokeProfile
            {...{
              name: testPokemon.name,
              type: testPokemon.type,
              tera: testPokemon.tera,
              item: testPokemon.item,
              ability: testPokemon.ability,
              nature: testPokemon.nature,
            }}
          />
        </Tab>
        <Tab
          eventKey="types"
          title="Type Matchups"
          className="border border-top-0 rounded-bottom p-3 text-black bg-white"
        >
          <PokeProfile
            {...{
              name: testPokemon.name,
              type: testPokemon.type,
              tera: testPokemon.tera,
              item: testPokemon.item,
              ability: testPokemon.ability,
              nature: testPokemon.nature,
            }}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonInfoWindow />} />
      </Routes>
    </Router>
  );
}
