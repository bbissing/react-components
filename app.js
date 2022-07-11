// TODO
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  mouseEnter() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? "bold" : "normal"
    };

    return (
      <li style={style} onMouseEnter={this.mouseEnter.bind(this)}>{this.props.item}</li>
    );
  }
}

var Groceries = (props) => (
  <ul>
    {props.groceryItems.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var GroceryList = () => (
  <div>
    <Groceries groceryItems={['Apples', 'Bananas']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));



// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.item}</li>
//     );
//   }
// }

// var Groceries = (props) => (
//   <ul>
//     {props.groceryItems.map(item =>
//       <GroceryListItem item={item} />
//     )}
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <Groceries groceryItems={['Apples', 'Bananas']}/>
//   </div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById('app'));



// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );

// var GroceryList = () => (
//   <div>
//     <GroceryListItem groceryItems={['Apples', 'Bananas']}/>
//   </div>
// );

// ReactDOM.render(<GroceryList />, document.getElementById('app'));