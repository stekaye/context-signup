import React, {createContext, useState} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {

  const [language, setLanguage] = useState('english');
  const changeLanguage = (evt) => setLanguage(evt.target.value);

  return (
    <LanguageContext.Provider value={{language, changeLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
}


// export class LanguageProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {language: 'english'};
//     this.changeLanguage = this.changeLanguage.bind(this);
//   }

//   changeLanguage(evt) {
//     this.setState({language: evt.target.value});
//   }

//   render() {
//     return (
//       <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
//         {this.props.children}
//       </LanguageContext.Provider>
//     );
//   }
// }

// export const withLanguageContext = Component => props => (
//   <LanguageContext.Consumer>
//     {value => <Component languageContext={value} {...props}/>}
//   </LanguageContext.Consumer>
// );
