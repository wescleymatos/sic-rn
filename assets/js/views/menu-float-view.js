var MenuFloatView = React.createClass({
    style: {
        bottom: '45px',
        right: '24px'
    },
    render: function() {
        return (
            <div className='fixed-action-btn' style={this.style}>
                <a href="#" className='btn-floating btn-large waves-effect waves-light red'>
                    <i className='material-icons'>settings</i>
                </a>
                <ul>
                    <li>
                        <a href="pessoas.html" className='btn-floating green'>
                            <i className='material-icons'>add</i>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" className='btn-floating blue'>
                            <i className='material-icons'>search</i>
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
