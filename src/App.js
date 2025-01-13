import { Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import { LibraryBooks, People, BookOnline, Category } from '@mui/icons-material';

// Importando os componentes
import { LivroList, LivroEdit, LivroCreate } from './components/livros';
import { UtilizadorList, UtilizadorEdit, UtilizadorCreate } from './components/utilizadores';
import { EmprestimoList, EmprestimoEdit, EmprestimoCreate } from './components/emprestimos';
import { CategoriaList, CategoriaEdit, CategoriaCreate } from './components/categorias';

// Configuração do Data Provider
const dataProvider = lb4Provider('http://localhost:3000');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource 
            name="livros" 
            list={LivroList} 
            edit={LivroEdit} 
            create={LivroCreate}
            icon={LibraryBooks}
        />
        <Resource 
            name="utilizadores" 
            list={UtilizadorList} 
            edit={UtilizadorEdit} 
            create={UtilizadorCreate}
            icon={People}
        />
        <Resource 
            name="emprestimos" 
            list={EmprestimoList} 
            edit={EmprestimoEdit} 
            create={EmprestimoCreate}
            icon={BookOnline}
        />
        <Resource 
            name="categorias" 
            list={CategoriaList} 
            edit={CategoriaEdit} 
            create={CategoriaCreate}
            icon={Category}
        />
    </Admin>
);

export default App;