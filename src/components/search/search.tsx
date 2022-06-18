interface SearchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ query, onChange }: SearchProps) => {
  return (
    <input type="text" value={query} placeholder="Search" onChange={onChange} />
  );
};
