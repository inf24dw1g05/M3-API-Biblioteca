import {
    List,
    Datagrid,
    TextField,
    NumberField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
    required
} from 'react-admin';

export const LivroList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="titulo" />
            <TextField source="autor" />
            <NumberField source="anoPublicacao" />
            <ReferenceField source="categoriaId" reference="categorias">
                <TextField source="nome" />
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);

const LivroForm = props => (
    <SimpleForm {...props}>
        <TextInput source="titulo" validate={[required()]} fullWidth />
        <TextInput source="autor" validate={[required()]} fullWidth />
        <NumberInput source="anoPublicacao" />
        <ReferenceInput source="categoriaId" reference="categorias">
            <SelectInput optionText="nome" />
        </ReferenceInput>
    </SimpleForm>
);

export const LivroEdit = props => (
    <Edit {...props}>
        <LivroForm />
    </Edit>
);

export const LivroCreate = props => (
    <Create {...props}>
        <LivroForm />
    </Create>
);  