import React from 'react';
import { ListItem } from './index.styles';

export interface ListResultProps {
  setVisible: () => void;
  previousSearches: string[];
  getWeatherFunction: (city: string) => void;
}

const ListResult: React.FC<ListResultProps> = ({ setVisible, previousSearches, getWeatherFunction }) => {
  const handleSearchFromList = (city: string) => {
    getWeatherFunction(city);
    setVisible();
  };

  return (
    <ul>
      {previousSearches.map((previousSearch, index) => (
        <ListItem onClick={() => handleSearchFromList(previousSearch)} key={index}>
          {previousSearch}
        </ListItem>
      ))}
    </ul>
  );
};

export default ListResult;
