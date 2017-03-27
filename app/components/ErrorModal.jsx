var React = require('react')
var ReactDom = require ('react-dom')
var ReactDomServer = require('react-dom/server')

var ErrorModal = React.createClass ({
  getDefaultProps: function () {
    return {
      title: 'Error'
    }
  },
  propTypes: function () {
    title: React.propTypes.string
    message: React.propTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;

    var modalMarkup =  (
      <div id='error-modal' className='reveal tiny text-center' data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className='hollow button expanded' data-close="">Okay</button>
        </p>
      </div>
    )

    var $modal = $(ReactDomServer.renderToString(modalMarkup));
    $(ReactDom.findDOMNode(this)).html($modal)

    var modal = new Foundation.Reveal($('#error-modal'))
    modal.open();
  },
  render: function () {
    return (
      <div>

      </div>
    )
  }
})

module.exports = ErrorModal
