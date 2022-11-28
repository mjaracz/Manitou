import { StoreProvider } from './store';
import { Routing } from './routing';

export const App = () => {
  return (
    <StoreProvider>
      <Routing/>
    </StoreProvider>
  );
}
