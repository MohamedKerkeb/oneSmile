/* eslint-disable react/no-unescaped-entities */

export function Header({ id }) {
  return (
    <>
      <div className="bg-gray-600" id={id}>
        <header className="shadow h-screen">
          <div className="max-w-5xl mx-auto py-6 max-h-full">
            <h1 className="text-5xl font-bold text-gray-900">It's me, Mohamed </h1>
          </div>
        </header>
      </div>
    </>
  );
}
