const About = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-4 text-white ">
      <h1 className="text-center text-4xl font-bold text-primary">About</h1>
      <div className="flex w-full  flex-col  items-center gap-8 sm:max-w-xl md:max-w-2xl lg:max-w-4xl ">
        <div
          className={
            'mt-4 flex w-full flex-col  rounded-lg bg-primary bg-opacity-50 p-4 shadow-md '
          }
        >
          <h2 className="mb-4 text-center text-2xl font-bold">
            What is kinkdotai?
          </h2>
          <p className=" ml-6 break-words">
            kinkdotai is a website that generates adult imagery with custom AI
            algorithms. Just choose your tags and click generate to get started!
          </p>
        </div>
        <div
          className={
            'mt-4 flex w-full flex-col   rounded-lg bg-primary  bg-opacity-50 p-4 shadow-md '
          }
        >
          <h2 className="mb-4 text-center text-2xl font-bold">
            Suggestions and Questions
          </h2>
          <ul className="list-disc">
            <li className="ml-6 break-words">
              For comments, suggestions, or questions, please visit our Discord.
            </li>
            <li className="ml-6 break-words">
              Any generations of content on this website that resemble real
              people are purely coincidental. All people generated are 18+ years
              of age. This AI mirrors biases and misconceptions that are present
              in its training data.
            </li>
            <li className="ml-6 break-words">
              For business inquiries, complaints or content takedown, please
              contact support@kinkdotai
            </li>
          </ul>
        </div>
        <div
          className={
            'mt-4 flex w-full flex-col   rounded-lg bg-primary  bg-opacity-50 p-4 shadow-md '
          }
        >
          <h2 className="mb-4 text-center text-2xl font-bold">
            Guidlines and Rules
          </h2>
          <ul className="list-disc">
            <li className="ml-6 break-words">
              Content Guidelines: Images must not contain any of the following:
            </li>
            <li className="ml-6 break-words">
              Images that depict minors or underage individuals
            </li>
            <li className="ml-6 break-words">
              Images that depict non-consensual sexual acts
            </li>
          </ul>
        </div>
        <div
          className={
            'mt-4 flex w-full  flex-col  rounded-lg bg-primary  bg-opacity-50 p-4 shadow-md '
          }
        >
          <h2 className="mb-4 text-center text-2xl font-bold">Complaints</h2>
          <ul className="list-disc">
            <li className="ml-6 break-words">
              Images may be flagged with the &quot;flag&quot; icon.
            </li>
            <li className="ml-6 break-words">
              Images will be automatically and manually reviewed for safety
            </li>
            <li className="ml-6 break-words">
              Manual reviews will be processed within 7 days
            </li>
            <li className="ml-6 break-words">
              Review process: We will manually review images to see if they meet
              our content guidelines
            </li>
            <li className="ml-6 break-words">
              Outcomes: Images found in violation will be immediately deleted.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
