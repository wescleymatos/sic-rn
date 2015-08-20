var MenuFloatView = React.createClass({
    style: {
        bottom: '45px',
        right: '24px'
    },
    aClass: 'btn-floating btn-large waves-effect waves-light red',
    addBtnClass: 'btn-floating green',
    searchBtnClass: 'btn-floating blue',
    divClass: 'fixed-action-btn',
    iClass: 'material-icons',
    render: function() {
        return (
            <div className={this.divClass} style={this.style}>
                <a href="#" className={this.aClass}>
                    <i className={this.iClass}>settings</i>
                </a>
                <ul>
                    <li>
                        <a href="pessoas.html" className={this.addBtnClass}>
                            <i className={this.iClass}>add</i>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className={this.searchBtnClass}>
                            <i className={this.iClass}>search</i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
});

React.render(
  <MenuFloatView />,
  document.querySelector('#menu-float')
);
