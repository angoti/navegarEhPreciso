import { useState } from 'react';
import { RootNavigation } from './src/navigators/RootNavigator';
import { TelaLogin } from './src/screens/TelaLogin';

export default function App() {
  const [autenticado, setAutenticado] = useState(false);

  // Troca o navigator raiz — não navega para login, evita o botão ← de volta
  if (!autenticado) {
    return <TelaLogin aoFazerLogin={() => setAutenticado(true)} />;
  }

  return <RootNavigation />;
}
