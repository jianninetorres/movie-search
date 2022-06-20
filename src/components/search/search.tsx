import { Container, TextInput } from "@mantine/core";

interface SearchProps {
  query: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ query, onChange }: SearchProps) => {
  return (
    <Container p="md" px="0" size="lg">
      <TextInput
        placeholder="Search"
        label="Movie search"
        required
        onChange={onChange}
        value={query}
      />
    </Container>
  );
};
