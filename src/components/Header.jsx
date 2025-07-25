import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-myPink px-5 py-4 border-b-4 border-myDarkGreen">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img className="h-10" src="icon.png" alt="icon" />
          <h1 className="text-3xl text-myDarkGreen font-bold">Dandelions</h1>
        </Link>

        <Link
          to="/list"
          className="text-myDarkGreen text-lg font-semibold underline hover:text-myDarkGreen/70"
        >
          View All Locations
        </Link>
      </div>
    </header>
  );
}
