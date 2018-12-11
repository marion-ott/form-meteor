import { Template } from 'meteor/templating';
import users from '../../imports/db/data';

Template.list.helpers(
    {
        users: () => users.find()
    }
)

Template.list.events(
    {   
        "click .delete": (event, template) => {
            event.preventDefault()
            //console.log(event.target.id);
            users.remove(
                {
                    _id: event.target.id
                }
            )
        }
    },
)