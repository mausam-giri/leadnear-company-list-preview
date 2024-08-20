import "./App.css";
import CompanyCard, { CompanyCardProps } from "./CompanyCard";
import SimilarSearchCard, { SearchSuggestionProps } from "./SimilarSearchCard";
import CompanyLogo from "./assets/business_img.webp";
function App() {
  const companyDetails: CompanyCardProps[] = [
    {
      name: "Happiest Minds Technologies",
      industry: "Information Technology And Services",
      location: "Bengaluru, Karnataka",
      linkCompany: "",
      noOfEmployee: "1001-5000",
      description:
        "Happiest Minds Technologies is a Information Technology And Services company and has headquarters in Bengaluru, Karnataka. Happiest Minds Technologies has 1001-5000 employees. Happiest Minds Technologies was founded in 2011. Happiest Minds Technologies is a privately held company. Happiest Minds Technologies has raised $106M.",
    },
    {
      name: "Celebal Technologies",
      industry: "Information Technology And Services",
      location: "Jaipur, Rajasthan, India",
      linkCompany: "",
      noOfEmployee: "Jaipur, Rajasthan, India",
      description:
        "Celebal Technologies is a Information Technology And Services company and has headquarters in Jaipur, Rajasthan, India. Celebal Technologies has 1001-5000 employees. Celebal Technologies specialises in internet of things, artificial intelligence. Celebal Technologies was founded in 2015. Celebal Technologies is a privately held company. Celebal Technologies has raised $31850052.",
    },
    {
      name: "Walmart India Private Limited",
      industry: "Walmart India Private Limited",
      location: "Gurgaon, Harayana",
      linkCompany: "",
      noOfEmployee: "5001-10000",
      description:
        "Walmart India Private Limited is a Information Technology And Services company and has headquarters in Gurgaon, Harayana. Walmart India Private Limited has 5001-10,000 employees. Walmart India Private Limited was founded in 2009. CEO of Walmart India Private Limited is Krish Iyer.",
    },
  ];
  const searchSuggestions: SearchSuggestionProps[] = [
    {
      link: "",
      text: "List Of Lead Generation Companies In India",
    },
    {
      link: "",
      text: "List Of Digital Marketing Companies In India",
    },
    {
      link: "",
      text: "List Of Mobile App Development Companies In India",
    },
    {
      link: "",
      text: "List Of Top BPO Companies In India",
    },
  ];
  return (
    <>
      <div>
        <div className="mt-4">
          <div className="">
            
          <section className="wrapper mt-[55px] md:mt-[85px] border shadow-md bg-[url('./assets/bg_header.png')] overflow-hidden rounded-md">
              <div className="mt-12 relative bg-white p-2">
                <div className="p-2 w-fit absolute border border-blue-200 bg-white rounded shadow -top-[10%] md:-top-1/4 left-2">
                  <img src={CompanyLogo} alt="Company Icon" />
                </div>

                <div className="ml-[90px]">
                  <h1 className="text-3xl mb-4">
                    Top&nbsp;
                    <span className="font-semibold">
                      IT Services Companies&nbsp;
                    </span>
                    in India
                  </h1>
                  <p className="text-sm">
                    Leadnear helps you find the best providers, offering access
                    to key decision-makers' contact details and company
                    information, including founders, CEOs, and department heads,
                    along with headquarters, employee count, and more.
                  </p>
                  <div className="mt-4 text-sm pb-2">
                    <span className="font-medium">100 Companies |&nbsp;</span>
                    <span>Updated: {"Aug 09, 2024"}</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-10">
              <div className="pt-8 wrapper text-blue-800  rounded-md border  shadow-md bg-[url('./assets/bg_header.png')] overflow-hidden ">
                <div className="bg-white px-4 py-2 pb-6">
                  <h1 className="text-3xl mb-4">
                    Top{" "}
                    <span className="font-semibold">IT Services Companies</span>{" "}
                    in India
                  </h1>
                  <p className="text-sm">
                    Leadnear helps you find the best providers, offering access
                    to key decision-makers' contact details and company
                    information, including founders, CEOs, and department heads,
                    along with headquarters, employee count, and more.
                  </p>
                  <div className="mt-4 text-sm">
                    <span className="font-medium">100 Companies |&nbsp;</span>
                    <span>Updated: {"Aug 09, 2024"}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="wrapper pb-4 border-b">
            <div className="text-sm px-4 mt-4 text-center">
              <p className=" capitalise mb-1">
                SHARE ON LINKEDIN TO DOWNLOAD THIS LIST WITH UPTO 500 COMPANIES
                FOR FREE
              </p>
              <button className="mx-auto flex items-center group px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Share on Linkedin
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="w-0 h-0 inline-block fill-current pl-1 transition-all duration-300 group-hover:w-5 group-hover:h-5"
                  role="img"
                  viewBox="0 0 24 24"
                  strokeWidth="0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="flex flex-col md:flex-row gap-4 px-2 sm:px-4 md:px-0">
            <div className="mt-4">
              <h2 className="text-lg font-medium mb-3">
                Best IT Services Provider Companies India | Top IT Consulting
                Companies
              </h2>
              <div className="flex flex-col gap-4">
                {companyDetails &&
                  companyDetails.map((company, idx) => (
                    <CompanyCard
                      key={idx}
                      name={company.name}
                      industry={company.industry}
                      location={company.location}
                      linkCompany={company.linkCompany}
                      description={company.description}
                      noOfEmployee={company.noOfEmployee}
                    />
                  ))}
              </div>
              <div className="py-4">
                <SocialMediaShare />
              </div>
            </div>
            <div className="min-w-[320px] md:mt-14">
              <SimilarSearchCard suggestions={searchSuggestions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SocialMediaShare() {
  return (
    <div className="space-y-3 text-center">
      <h2 className="mb-3 text-xl font-medium">Share the list with others</h2>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            className="w-5 h-5 fill-current"
            role="img"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Pinterest icon</title>
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
          <span>Linkedin</span>
        </button>
        <button className="bg-gray-900 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            className="w-5 h-5 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          <span>Twitter</span>
        </button>
        <button className="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            className="w-5 h-5 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
          </svg>
          <span>Reddit</span>
        </button>

        <button className="bg-sky-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg
            className="w-5 h-5 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span>Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default App;
