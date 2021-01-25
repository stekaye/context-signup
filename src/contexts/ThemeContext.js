import React, {Component, createContext} from 'react';

export const ThemeContext = createContext();

// Create a new context.
// Each context has two pieces: a provider and a consumer.
// Create component with provider. Then wrap it around this.props.children.
// They have to consume it.
// Export both items.
// In main app, import and wrap relevant content in <ThemeProvider>

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: true
    }
  }
  render() {
    //VALUE IS KEY PROP. WILL BE PASSED DOWN TO ALL DESCENDENTAS. CAN ONLY BE ONE VALUE.
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
