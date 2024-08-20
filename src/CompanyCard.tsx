import CompanyLogo from './assets/company.jpeg';

export interface CompanyCardProps {
  name: string;
  industry: string;
  linkCompany?: string;
  location: string;
  noOfEmployee?: string;
  description?: string;
}
export default function CompanyCard(props: CompanyCardProps) {
  return (
    <div className="py-4 px-4 border shadow rounded-md hover:shadow-lg hover:border-gray-300 cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <img
            className="w-12 contain rounded-md"
            src={CompanyLogo}
            alt="leadnear company logo"
          />
          <div>
            <h2 className="text-xl font-medium text-blue-500">{props.name}</h2>
            <p className="text-gray-800">{props.industry}</p>
          </div>
        </div>
        <div>
          <a
            href={props.linkCompany || '#'}
            target="_blank"
            className="px-3 py-2 border-2 hover:shadow shadow-blue-500 rounded-md text-blue-500 border-blue-500 "
          >
            View Top Contancts
          </a>
        </div>
      </div>
      <div className="[&>p]:text-gray-400 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-gray-800">{props.location}</p>
          </div>
          <div>
            <h3 className="font-medium">Global Company Size</h3>
            <p className="text-gray-800">{props.noOfEmployee}</p>
          </div>
          <div>
            <h3 className="font-medium">Industry</h3>
            <p className="text-gray-800">{props.industry}</p>
          </div>
        </div>
        <div>
          <h3 className="font-medium">Description</h3>
          <p className="line-clamp-2 text-gray-800">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
