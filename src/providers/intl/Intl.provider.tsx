import { IntlProvider as Provider } from 'react-intl';
import enMessages from 'translations/en.json';

const DEFAULT_LOCALE = 'en';

const IntlProvider: React.FC = ({ children }) => {
  const messages = {
    en: enMessages,
  };

  return (
    <Provider locale={DEFAULT_LOCALE} messages={messages[DEFAULT_LOCALE]} defaultLocale={DEFAULT_LOCALE}>
      {children}
    </Provider>
  );
};

export default IntlProvider;
