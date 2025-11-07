import Compteur from './composants/Compteur';
import MessageBouton from './composants/MessageBouton';
import FormulaireNom from './composants/FormulaireNom';
import CompteurEffet from './composants/CompteurEffet';

import AffichageDynamique from './composants/AffichageDynamique';
import FormulaireInscription from './composants/FormulaireInscription';
import CompteurAvecEffet from './composants/CompteurAvecEffet';
function App() {
  return (
    <div>
      <h1>Exercices React</h1>

      <Compteur />
      <MessageBouton />
      <FormulaireNom />
      <CompteurEffet />

      <hr />

      {/* Exercice 1 */}
      <AffichageDynamique />

      {/* Exercice 2 */}
      <FormulaireInscription />

      {/* Exercice 3 */}
      <CompteurAvecEffet />
    </div>
  );
}

export default App;