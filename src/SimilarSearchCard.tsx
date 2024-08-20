import searchIcon from './assets/glass-search-icon.svg';

export interface SimilarSearchCardProps {
  suggestions: SearchSuggestionProps[] | undefined;
}
export default function SimilarSearchCard(props: SimilarSearchCardProps) {
  return (
    <div>
      <div className="px-4 py-4 md:border md:shadow-md rounded-md w-fit">
        <h2 className="font-medium text-lg">Explore Similar Searches</h2>
        <div className="mt-3">
          <div className="space-y-2">
            {props.suggestions &&
              props.suggestions.map((suggestion, i) => (
                <SearchSuggestion
                  key={i}
                  text={suggestion.text}
                  link={suggestion.link}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export interface SearchSuggestionProps {
  link?: string;
  text: string;
}
function SearchSuggestion(props: SearchSuggestionProps) {
  return (
    <a
      href={props.link || '#'}
      className="flex items-start gap-1 text-blue-800 underline underline-offset-2"
    >
      <img className="w-4 pt-1.5" src={searchIcon} alt="search" />
      {props.text}
    </a>
  );
}
