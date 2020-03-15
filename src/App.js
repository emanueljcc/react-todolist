import React from 'react';
import './App.css';
import ListItems from './ListItems/ListItems';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpate = this.setUpate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  setUpate(value, key) {
    const items = this.state.items;
    // eslint-disable-next-line array-callback-return
    items.map(item => {
      if (item.key === key) {
        item.text = value;
      }
    })
    this.setState({
      items
    });
  }

  render(){
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Exter text" value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpate}/>
      </div>
    )
  }
}

export default App;
