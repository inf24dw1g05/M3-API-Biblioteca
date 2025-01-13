import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    DateInput,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin';

export const EmprestimoList = props => (
    <List {...props}>
        <Datagrid>
            <ReferenceField source="utilizadorId" reference="utilizadores">
                <TextField source="nome" />
            </ReferenceField>
            <ReferenceField source="livroId" reference="livros">
                <TextField source="titulo" />
            </ReferenceField>
            <DateField source="dataEmprestimo" />
            <DateField source="dataDevolucao" />
            <EditButton />
        </Datagrid>
    </List>
);

const EmprestimoForm = props => (
    <SimpleForm {...props}>
        <ReferenceInput source="utilizadorId" reference="utilizadores">
            <SelectInput optionText="nome" validate={[required()]} />
        </ReferenceInput>
        <ReferenceInput source="livroId" reference="livros">
            <SelectInput optionText="titulo" validate={[required()]} />
        </ReferenceInput>
        <DateInput source="dataEmprestimo" validate={[required()]} />
        <DateInput source="dataDevolucao" validate={[required()]} />
    </SimpleForm>
);

export const EmprestimoEdit = props => (
    <Edit {...props}>
        <EmprestimoForm />
    </Edit>
);

export const EmprestimoCreate = props => (
    <Create {...props}>
        <EmprestimoForm />
    </Create>
);