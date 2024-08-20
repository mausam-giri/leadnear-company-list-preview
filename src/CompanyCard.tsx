import CompanyLogo from "./assets/business_img.webp";

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
    <div className="py-4 px-4 border  shadow-md rounded-md hover:shadow-lg hover:border-gray-300 cursor-pointer">
      <div className="flex gap-2 justify-between items-center mb-4">
        <div className="flex gap-2">
          <div className="rounded-md border shadow p-2 h-fit">
            <img
              className="w-12 md:w-[2.3rem] contain"
              src={CompanyLogo}
              alt="leadnear company logo"
            />
          </div>
          <div>
            <h2 className="text-xl font-medium text-blue-800">{props.name}</h2>
            <a
              href={props.linkCompany || "#"}
              target="_blank"
              className="text-sm rounded-md text-blue-500 underline underline-offset-2 text-center"
            >
              View Top Contancts with Company Employee Directory
              <svg
                stroke="currentColor"
                fill="currentColor"
                className="w-5 h-5 fill-current inline-block pl-1"
                role="img"
                viewBox="0 0 24 24"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
              </svg>
            </a>
          </div>
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
