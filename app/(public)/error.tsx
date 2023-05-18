"use client";

const Error = ({error, reset}: { error: Error; reset: () => void }) => {
  return (
    <div className="su-cc su-my-50">
      <h2>Something went wrong!</h2>
      Apologies, an error occurred when attempting to preset the page you are attempting to view. Please try a different
      path.
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error;