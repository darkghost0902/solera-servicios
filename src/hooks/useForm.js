
import { useEffect, useMemo, useState } from "react"

export const useForm = ( inicial= {}, formValidations = {}, reset = {}) => {

    const [form, setform] = useState(inicial);
    const [formValidation, setformValidation] = useState({});

    useEffect(() => {
        createValidator();
    }, [form])

    useEffect(() => {
      setform( inicial );
    }, [inicial])
    
    
    const isFormValid = useMemo(() => {
        
        for ( const formValue of Object.keys( formValidation)){
            if ( formValidation[formValue] !== null) {return false}
            
        }
        return true;
    }, [formValidation])

    const inputChange = ( {target}) => {

        const {name, value} = target;

        setform({
            ...form,
            [name] : value
        })
    };
    
    const resetForm = () => {

        setform( reset )
    }

    const createValidator = () => {
        const formChekedValue = {};

        for (const formField of Object.keys( formValidations)){
            const [ fn, errorMessage = "campo obligatorio"] = formValidations[ formField ];
           
            formChekedValue[`${formField }Valid`] = fn(  form[ formField ]) ? null : errorMessage;
        }
        setformValidation( formChekedValue);
    }


return {
    ...form, inputChange, resetForm, form, ...formValidation, isFormValid
}

}