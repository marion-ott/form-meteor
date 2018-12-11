import { Template } from 'meteor/templating'
import users from '../../imports/db/data'


Template.form.events(
    {   
        "click #submit": (event, template) => {
            event.preventDefault()
            users.insert(
                {
                    "firstName": template.find("#firstName").value,
                    "secondName": template.find("#secondName").value,
                    "github": template.find("#github").value,
                }
            )
        }
    },
)