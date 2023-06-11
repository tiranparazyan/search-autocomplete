import { DataProps, SearchProps } from "../DB/db";

export function combineResults(
  searchHistory: SearchProps[],
  suggestions: SearchProps[]
) {
  const combinedArray = searchHistory.slice();

  for (let i = 0; i < suggestions.length && combinedArray.length < 10; i++) {
    if (!combinedArray.some(({ text }) => text.startsWith(suggestions[i].text))) {
      combinedArray.push(suggestions[i]);
    }
  }

  return combinedArray.slice(0, 10);
}

export function filterSearch(text: string, db: DataProps[]) {
  return db.filter(({ category, description, title }) => {
    return (
      category.toLowerCase().startsWith(text.toLowerCase()) ||
      description.toLowerCase().startsWith(text.toLowerCase()) ||
      title.toLowerCase().startsWith(text.toLowerCase())
    );
  });
}
