import React from "react";
import { nanoid } from 'nanoid';
import { getDatabase, child, ref, set, get } from "firebase/database";
import { isWebUrl } from 'valid-url';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import ToolTip from "react-bootstrap/Tooltip";


class Form extends React.Component {

    constructor(props){
        super(props)
        this.state={
            longURL: '',
            preferedAlias:'',
            generatedURL:'',
            loading: 'false',
            erros: [],
            errorMessage: {},
            toolTipMessage: 'Copy To Clip Board'
        };

        

    }

    onSubmit = async (event) => {
        event.preventDefault(); //Prevents the page from reloading when submit is clicked
        this.setState({
            loading: true,
            generatedURL: ''
        })

        // Validate the input the user has sumbitted
        var isFormValid = await this.validateInput()
        if (!isFormValid) {
            return
        }
}