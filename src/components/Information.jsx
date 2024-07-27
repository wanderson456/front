import React from 'react'
import { List, ListItem } from 'primereact/components/list';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'; // or another theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const Information = ({ title, informations }) => {
  return (
    <div className="p-mb-3">
      <h4>{title}</h4>
      <List>
        {informations.map((info) => (
          <ListItem key={info.text}>
            <a href={info.link} className="p-link">{info.text}</a>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Information;
