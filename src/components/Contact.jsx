export function Contact({ id }) {
  return (
    <>
      <div className="h-screen" id={id}>
        <div className="max-w-5xl mx-auto py-6 max-h-full">
          <h1 className="text-3xl col-span-3 text-center uppercase text-white">Contact</h1>
          <form>
            <div className="grip gap-5">
              <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Large input
                </label>
                <textarea
                  type="text"
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
