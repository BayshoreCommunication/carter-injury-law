import React from "react";
import SectionLayout from "../shared/SectionLayout";

const CoreValues = () => {
  return (
    <div className="mt-10 lg:mt-14">
      <div bg="container w-full lg:max-w-[60%] mx-auto pb-2">
        <h1
          className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20  text-center  uppercase`}
        >
          Core Values
        </h1>
      </div>
      <SectionLayout>
        <div className="flex flex-col gap-6 lg:gap-10">
          <div>
            <p className="mb-4 text-base lg:text-xl font-semibold">
              Win, Win, Win
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p className="text-base lg:text-xl">
                  Winning is in our DNA. We win cases so our clients win, our
                  community wins, and our law firm thrives. In the relentless
                  pursuit of justice, we leave no stone unturned, fighting for
                  the best possible outcome in every case. Mistakes are only
                  failures when we do not learn from them; so, we own them, we
                  learn from them, we get back in the game, and we win. We win
                  the hearts of our clients by understanding their needs,
                  standing by their side, and delivering unparalleled results
                  that make a difference in their lives.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base lg:text-xl font-semibold">
              Be a Superhero
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p className="text-base lg:text-xl">
                  We consider who we really want to be and strive to be our best
                  selves—radical authenticity is our way of life. We practice
                  temperance, maintaining a balanced approach to challenges and
                  choosing careful, thoughtful actions over quick, emotional
                  reactions. We believe in doing what we love and finding
                  fulfillment in our work, knowing that passion drives
                  excellence. We treat everyone—clients, colleagues,
                  adversaries, and even ourselves—with respect, dignity, and
                  consideration. We work hard and stay prepared but do so with
                  quiet confidence—our adversaries underestimate us at their own
                  peril.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base lg:text-xl font-semibold">
              Spread Good Mojo, Avoid Bad Juju
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p className="text-base lg:text-xl">
                  By taking care of people and doing the right thing (even when
                  it’s not easy), success will naturally follow. We carry
                  ourselves with dignity and professionalism in every
                  interaction, never compromising our values or stooping to the
                  level of those who engage in petty behavior. Our word is our
                  bond; we uphold our integrity in all matters, ensuring that
                  trust and respect are the foundation of our case handling and
                  relationships.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base lg:text-xl font-semibold">
              Grow Boldy
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p className="text-base lg:text-xl">
                  Innovation is at the heart of what we do, so we aren’t afraid
                  to share ideas, take risks, and challenge the status quo. We
                  do not fear growth—we embrace it. We keep an eye on the
                  future, anticipating change and staying ahead of the curve. We
                  commit to lifelong learning, continuously educating ourselves
                  and those around us to better serve our clients and foster a
                  culture of progress. We intentionally choose the path of
                  growth, bold and fearless!
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-base lg:text-xl font-semibold">
              Own The Universe
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p className="text-base lg:text-xl">
                  We take full ownership of our actions and embrace personal
                  responsibility. We approach each case as if it were our own,
                  treating every decision and outcome with the utmost care and
                  commitment. We are honest with ourselves and others. There are
                  no excuses here—just a commitment to results. We recognize
                  that we are the creators of our own realities, shaping our own
                  successes and the success of our clients through
                  accountability, action, and integrity.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default CoreValues;
