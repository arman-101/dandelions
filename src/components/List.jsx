import { useNavigate } from 'react-router-dom';

const sections = {
  "Islands and Peninsulas": [
    ["The Islands of Dara", "The overall archipelago where the story takes place."],
    ["Big Island", "The largest central landmass containing multiple states."],
    ["Arulugi", "The island home to the state of Amu."],
    ["Crescent Island", "An island in the northwest of Dara."],
    ["Dasu", "One of the two home islands of Xana."],
    ["Écofi Island", "A wild and sparsely settled island, home to elephants."],
    ["Itanti Peninsula", "A peninsula located across the Kishi Channel from Wolf's Paw."],
    ["Maji Peninsula", "A peninsula south of the Sonaru Desert."],
    ["Ogé", "An island mentioned as part of Dara."],
    ["Rui", "One of the two home islands of Xana and the location of Mount Kiji."],
    ["Silkworm Eggs", "A group of misty isles where the swordsman Médo trained Dazu Zyndu."],
    ["Tan Adü", "An island inhabited by people who live in a more primitive, natural state."],
    ["Tunoa Islands", "The ancestral island fiefdom of the Zyndu Clan."],
    ["Wolf's Paw", "The island home to the state of Gan."]
  ],

  "States and Regions": [
    ["Amu", "An elegant and arrogant state, located on Arulugi and in Géfica."],
    ["Cocru", "A martial state on the southern plains of the Big Island, famed for its warriors."],
    ["Faça", "A craggy state in the northern half of the Big Island."],
    ["Gan", "A wealthy and sophisticated state, located on Wolf's Paw and in Géjira."],
    ["Géfica", "A fertile region known as the 'land between the rivers,' historically part of Amu."],
    ["Géjira", "A region of rich alluvial plains on the Big Island, historically part of Gan."],
    ["Haan", "A woodsy and learned state in the northern half of the Big Island, known for philosophy."],
    ["Rima", "A woodsy state in the northern half of the Big Island, known for its miners and bladesmiths."],
    ["Xana", "The northwestern, conquering state that created the Empire, with its home islands being Rui and Dasu."]
  ],

  "Cities, Towns, and Capitals": [
    ["Boama", "A city in Faça, once a royal court."],
    ["Canfin", "A port city."],
    ["Çaruza", "The capital of Cocru."],
    ["Daye", "The capital of Dasu."],
    ["Dimu", "A city at the mouth of the Liru River on the Cocru side."],
    ["Dimushi", "A city across the Liru River from Dimu, on the Amu side."],
    ["Farun", "A town in the Tunoa Islands."],
    ["Ginpen", "The capital of Haan, renowned for its private academies."],
    ["Goa", "A city located at Thoco Pass."],
    ["Kiesa", "A village from which corvée laborers were sent."],
    ["Kriphi", "The former capital of Xana."],
    ["Müning", "The 'City in the Lake,' located on the island of Arulugi."],
    ["Na Thion", "The capital of Rima."],
    ["Napi", "A town about fifty miles from the port of Canfin."],
    ["Pan", "The 'Immaculate City,' the new Imperial capital built by Emperor Mapidéré."],
    ["Toaza", "The 'Port That Never Slept' and capital of Gan."],
    ["Zudi", "A city in northern Cocru, located on the Porin Plains."]
  ],

  "Mountains, Plains, and Passes": [
    ["Damu Mountains", "A mountain range that helps form a border on the Big Island."],
    ["Er-Mé Mountains", "A mountain range a few miles from Zudi."],
    ["Gonlogi Desert", "A deadly expanse on the Big Island."],
    ["Mount Fithowéo", "A mountain where holy fire was used for alchemy."],
    ["Mount Kiji", "A snow-peaked volcano on Rui Island, home to Mingén falcons and the source of lift gas."],
    ["Mount Rapa", "A glacier-capped mountain."],
    ["Porin Plains", "A sun-parched section of land outside Zudi."],
    ["Shinané Mountains", "A mountain range whose deep shades are home to spice estates."],
    ["Thoco Pass", "The main pass connecting Géjira to the Imperial heartland around Pan."],
    ["Wisoti Mountains", "A mountain range that helps form the walls of Thoco Pass."]
  ],

  "Bodies of Water and Beaches": [
    ["Four Placid Seas", "The collective name for the seas around the Islands of Dara."],
    ["Gaing Gulf", "A body of water with turbulent waters on the northern coast of Rui Island."],
    ["Kishi Channel", "The channel separating Wolf's Paw from the Itanti Peninsula, made unnavigable by a whirlpool."],
    ["Lake Arisuso", "A large, blue lake in a crater of Mount Kiji."],
    ["Lake Dako", "A smaller, emerald-green lake in a crater of Mount Kiji, sole source of lift gas."],
    ["Lake Tututika", "A lake known for sparkling schools of fish at sunrise."],
    ["Liru River", "A major river on the Big Island that flows up to Pan."],
    ["Lutho Beach", "A location known for its famed black sands."],
    ["Rufizo Falls", "A waterfall whose mists are mentioned in song."],
    ["Sonaru River", "A river known for its rapids."],
    ["Zathin Gulf", "A gulf in old Haan where the last prince of Rima was exiled."]
  ]
};

export default function List({ locations, onSelectLocation }) {
  const navigate = useNavigate();

  const handleClick = (name) => {
    const match = locations.find((loc) => loc.name === name);
    if (match) {
      onSelectLocation?.(match);
      // Navigate to "/" passing selectedLocation in state WITHOUT adding query params
      navigate('/', { state: { selectedLocation: match }, replace: true });
    }
  };

  return (
    <div className="pb-10">
      {Object.entries(sections).map(([sectionTitle, places]) => (
        <div
          key={sectionTitle}
          className="bg-myPink rounded mx-10 mt-6 p-6 border-2 border-myDarkGreen"
        >
          <h2 className="text-2xl font-semibold mb-4 text-myDarkGreen">
            {sectionTitle}
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-myDarkGreen">
            {places.map(([name, description]) => (
              <li key={name}>
                <span
                  onClick={() => handleClick(name)}
                  className="font-semibold text-myDarkGreen hover:underline cursor-pointer"
                >
                  {name}
                </span>
                {description ? `: ${description}` : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}