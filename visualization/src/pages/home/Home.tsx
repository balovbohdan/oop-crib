import { useUuiContext, useArrayDataSource, UuiContexts } from "@epam/uui";
import {
    FlexCell, FlexRow, FlexSpacer, Text, Button, LabeledInput, TextInput,
    PickerInput, SuccessNotification, ErrorNotification,
    useForm,
} from "@epam/promo";

interface Person {
    firstName?: string;
    lastName?: string;
    countryId?: number | string;
}

const UIM = () => {
    const uuiContext = useUuiContext();

    const countriesDataSource = useArrayDataSource({
        items: [],
    }, []);

    const { lens, save } = useForm<Person>({
        value: {},
        onSave: person => Promise.resolve({ form: person }) /* place your save api call here */,
        onSuccess: result => uuiContext.uuiNotifications.show(props => (
            <SuccessNotification { ...props }>
                <Text>Form saved</Text>
            </SuccessNotification>
        )),
        onError: error => uuiContext.uuiNotifications.show(props => (
            <ErrorNotification { ...props }>
                <Text>Error on save</Text>
            </ErrorNotification>
        )),
        getMetadata: () => ({
            props: {
                firstName: { isRequired: true },
                lastName: { isRequired: true },
                countryId: { isRequired: false },
            },
        }),
        settingsKey: 'basic-form-example',
    });

    return (
        <FlexCell width='100%'>
            <FlexRow vPadding='12'>
                <FlexCell grow={ 1 }>
                    <LabeledInput label='First Name' { ...lens.prop('firstName').toProps() } >
                        <TextInput placeholder='First Name' { ...lens.prop('firstName').toProps() } />
                    </LabeledInput>
                </FlexCell>
            </FlexRow>
            <FlexRow vPadding='12'>
                <FlexCell grow={ 1 }>
                    <LabeledInput label='Last Name' { ...lens.prop('lastName').toProps() }>
                        <TextInput placeholder='Last Name' { ...lens.prop('lastName').toProps() }/>
                    </LabeledInput>
                </FlexCell>
            </FlexRow>
            <FlexRow vPadding='12'>
                <FlexCell grow={ 1 }>
                    <LabeledInput label='Country' { ...lens.prop('countryId').toProps() } >
                        <PickerInput
                            { ...lens.prop('countryId').toProps() }
                            selectionMode='single'
                            valueType='id'
                            dataSource={ countriesDataSource }
                        />
                    </LabeledInput>
                </FlexCell>
            </FlexRow>
            <FlexRow vPadding='12'>
                <FlexSpacer />
                <Button caption='Save' onClick={ save } color='green' />
            </FlexRow>
        </FlexCell>
    );
}

export default UIM;
