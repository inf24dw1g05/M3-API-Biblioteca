import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    required
} from 'react-admin';

export const CategoriaList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="nome" />
            <EditButton />
        </Datagrid>
    </List>
);

const CategoriaForm = props => (
    <SimpleForm {...props}>
        <TextInput 
            source="nome" 
            validate={[required()]} 
            fullWidth
        />
    </SimpleForm>
);

export const CategoriaEdit = props => (
    <Edit {...props}>
        <CategoriaForm />
    </Edit>
);

export const CategoriaCreate = props => (
    <Create {...props}>
        <CategoriaForm />
    </Create>
);