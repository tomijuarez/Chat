define ( function () {
  var WINDOWS_CLASS = 'chat-header'
      , OPENED_ATTR   = 'open' 
      , applyStyle
      , windows
      , openWindow
      , closeWindows
      , getWindows = document.getElementsByClassName ( WINDOWS_CLASS )
      , setWindowEvents //OJO
      , getItems
      , currentBox     = null
      , currentWrapper = null
      , activeChat     = null
      , footer         = document.getElementById ('footer')
      , initialEvents
      , setInitialEvents
      ;
    
    Object.prototype.applyStyle = function ( attr, value ) {
      this.style [ attr ] = value;
      return this;
    };
    
    openWindow = function () {
      this.currentBox.applyStyle( 'height', '300px' );
      this.currentWrapper.applyStyle( 'bottom', '300px' ).setAttribute('open', true);
    };
    
    closeWindow = function () {
      this.currentBox.applyStyle( 'height', '0px' );
      this.currentWrapper.applyStyle( 'bottom', '0px' ).setAttribute('open', false);
    };
    
    
    setWindowEvent = function ( window ) {
      self = this;
      window.addEventListener(
          'click',
          function ( e ) {
            var target = e.target;
            self.currentBox     = target.nextElementSibling;
            self.currentWrapper = target.parentNode;
            if ( "false" == self.currentWrapper.getAttribute ('open') ) //si está cerrada
              openWindow();
            else //está abierta
              closeWindow();
          },
          false
      );
    };
    
    createWindow = function () {
      var wrapper  = document.createElement('div')
        , header   = document.createElement('div')
        , box      = document.createElement('div');
        
      wrapper.applyStyle('bottom', '300px').className = 'chat';
      header.className  = 'chat-header';
      box.className     = 'box';
      
      wrapper.appendChild(header);
      wrapper.appendChild(box);
      
      this.footer.appendChild(wrapper);
      return wrapper;
    };
    
    setInitialEvent = function ( element ) {
      element.addEventListener(
          'click',
          function ( e ) {
            setWindowEvent ( createWindow() ); 
          },
          true
      );
    };
    
    initialEvents = function () {
      var items = document.getElementsByClassName('connectedItem');
      for ( var i = 0; i < items.length; i++ ) 
        setInitialEvent( items [ i ] );
    };
    
    return {
      init : function () {
        initialEvents();
      }
    };
});