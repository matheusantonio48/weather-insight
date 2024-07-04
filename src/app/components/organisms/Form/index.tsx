import ListResult from '@/app/components/molecules/ListResult';
import { useWeather } from '@/context/useWeather';
import theme from '@/theme/theme';
import CloseIcon from '@mui/icons-material/Close';
import React, { FormEvent, useState } from 'react';
import { Container, Error, FormContainer } from './index.styles';

export interface FormProps {
  isVisible: boolean;
  setVisible: () => void;
  getWeatherFunction: {
    byName: (city: string) => void;
  };
}

const Form: React.FC<FormProps> = ({ isVisible, setVisible, getWeatherFunction }) => {
  const { previousSearches, addPreviousSearch } = useWeather();
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);

  const handleSearchByText = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cityToSearch = city.trim();

    if (cityToSearch === '') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    getWeatherFunction.byName(cityToSearch);
    addPreviousSearch(cityToSearch);

    setVisible();
    setCity('');
  };

  return (
    <Container isVisible={isVisible}>
      <div className="button-container">
        <button type="button" className="close-button" onClick={setVisible}>
          <CloseIcon fontSize="large" htmlColor={theme.colors.primary} />
        </button>
      </div>
      <FormContainer onSubmit={handleSearchByText} role="form">
        <input type="text" placeholder="City or Country" value={city} onChange={(e) => setCity(e.target.value)} />
        {error && (
          <Error>
            <p>Fill out the field, please.</p>
          </Error>
        )}
        <input type="submit" value="Search" className="form-button" />
      </FormContainer>
      <ListResult setVisible={setVisible} previousSearches={previousSearches} getWeatherFunction={getWeatherFunction.byName} />
    </Container>
  );
};

export default Form;
