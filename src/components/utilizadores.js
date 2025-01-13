import {
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    required,
    email
} from 'react-admin';

export const UtilizadorList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="nome" />
            <EmailField source="email" />
            <NumberField source="tipoUtilizador" />
            <EditButton />
        </Datagrid>
    </List>
);

const UtilizadorForm = props => (
    <SimpleForm {...props}>
        <TextInput source="nome" validate={[required()]} fullWidth />
        <TextInput source="email" validate={[required(), email()]} fullWidth />
        <NumberInput 
            source="tipoUtilizador" 
            validate={[required()]}
            min={1}
            max={3}
        />
    </SimpleForm>
);

export const UtilizadorEdit = props => (
    <Edit {...props}>
        <UtilizadorForm />
    </Edit>
);

export const UtilizadorCreate = props => (
    <Create {...props}>
        <UtilizadorForm />
    </Create>
);