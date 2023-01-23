import { Layout } from '@dhuo/shared-ui';

/* eslint-disable-next-line */
export interface FeaturesProps {}

export function Features(props: FeaturesProps) {
  return (
    <Layout>
      <div className="p-4 text-gray-600">
        <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">
          This is - what we do:
        </h1>

        <ul className="grid place-content-center sm:grid-cols-2 gap-8">
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-indigo-700">
              01.
            </div>
            <div>
              <div className="text-xl font-bold text-indigo-800">Research</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                We love numbers! We collect data and insights, analyze them then
                take the time to learn about your objectives, ask the right
                questions to understand your business.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-indigo-700">
              02.
            </div>
            <div>
              <div className="text-xl font-bold text-indigo-800">Strategey</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                Solutions are born from proper research, hard work, and strong
                strategy. We build data-driven roadmaps for every project to
                make pave the way to success.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-indigo-700">
              03.
            </div>
            <div>
              <div className="text-xl font-bold text-indigo-800">Design</div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                We design the right solution for your business. We craft
                beautiful, intuitive, and user-friendly interfaces that are easy
                to use and easy to maintain.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-indigo-700">
              04.
            </div>
            <div>
              <div className="text-xl font-bold text-indigo-800">
                Development
              </div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                We build the right solution for your business. We craft
                beautiful, intuitive, and user-friendly interfaces that are easy
                to use and easy to maintain.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="px-4 text-5xl font-extralight text-indigo-700">
              05.
            </div>
            <div>
              <div className="text-xl font-bold text-indigo-800">
                Deployment
              </div>
              <p className="max-w-xs py-2 text-sm text-indigo-900">
                We build the right solution for your business. We craft
                beautiful, intuitive, and user-friendly interfaces that are easy
                to use and easy to maintain.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

export default Features;
